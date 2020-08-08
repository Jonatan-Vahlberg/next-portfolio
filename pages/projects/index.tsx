import Head from 'next/head';
import Header from '../../components/Header';
import colors from '../../static/colors';
import HeroCover from '../../components/HeroCover';
import { Navbar } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ProjectsContainer from '../../components/project/ProjectsContainer';
import { GetStaticProps } from 'next';
import { getProjectsData } from '../../lib/projects';
import Project from '../../models/Project';

const Projects: React.FC<{ projects: Project[] }> = (props) => {
  return (
    <div style={{ background: colors.background }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="projects" home={false}>
        <ProjectsContainer projects={props.projects} />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjects = await getProjectsData();
  console.log('PROJECTS: ', allProjects);

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default Projects;
