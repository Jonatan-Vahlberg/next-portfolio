import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Project from '../../models/Project';
import { getProjectData } from '../../lib/projects';
import styles from './ProjectModal.module.css';

type ModalProps = {
  project?: Project;
  show: boolean;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const ProjectModal: React.FC<ModalProps> = ({ show, project, setSelectedProject }) => {
  const [projectData, setProjectData] = useState<{
    id: string;
    contentHtml: string;
  }>(null);
  //   useEffect(() => {
  //     if (project) {
  //       (async () => {
  //         const data = await getProjectData(project.id);
  //         setProjectData(data);
  //       })();
  //     }
  //   }, [project]);
  return (
    <Modal className={styles.baseModal} show={show} animation onHide={() => setSelectedProject(null)}>
      <Modal.Header>
        <Modal.Title>{project?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project?.subtitle}</p>
        {project?.html && <div dangerouslySetInnerHTML={{ __html: project.html }}></div>}
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
