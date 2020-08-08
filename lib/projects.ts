import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import Project from '../models/Project';

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getProjectsData = async (): Promise<Project[]> => {
  const fileNames = fs.readdirSync(projectsDirectory);
  //@ts-ignore
  const allProjectsData: Project[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  const allprojectsWithHtml = allProjectsData.map(async (project) => {
    const data = await getProjectData(project.id);
    return { ...project, html: data.contentHtml };
  });
  const allProjects = await Promise.all(allprojectsWithHtml);
  return allProjects;
};

export const getProjectData = async (id: string) => {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
