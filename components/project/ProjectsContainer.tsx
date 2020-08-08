import React, { useState } from 'react';
import Title from '../Title';
import ProjectListItem from './ProjectListItem';
import Project from '../../models/Project';
import ProjectModal from './ProjectModal';
import styles from './ProjectsContainer.module.css';

const ProjectsContainer: React.FC<{ projects?: Project[] }> = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState<Project>(null);
  return (
    <>
      <Title name="Projects" />
      <div className={styles.projectsContainer}>
        {projects
          .sort((a, b) => {
            console.log(a.orderId, b.orderId, a.orderId - b.orderId);
            return a.orderId - b.orderId;
          })
          .map((project) => (
            <ProjectListItem key={project.orderId} project={project} setSelectedProject={setSelectedProject} />
          ))}
      </div>
      <ProjectModal show={selectedProject !== null} project={selectedProject} setSelectedProject={setSelectedProject} />
    </>
  );
};

export default ProjectsContainer;
