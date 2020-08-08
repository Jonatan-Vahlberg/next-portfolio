import React from 'react';
import Project from '../../models/Project';
import { FaGithub, FaGooglePlay, FaGlobe } from 'react-icons/fa';
import IconContainer from '../IconContainer';
import { Card, Button } from 'react-bootstrap';

export type ListProps = {
  project: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const ProjectListItem: React.FC<ListProps> = (props) => {
  const { name, subtitle, platform, thumb, website, github, playstore } = props.project;
  return (
    <div key={name}>
      <Card style={{ width: '16rem', margin: '2rem 10px', marginTop: '2rem', height: '560px' }}>
        <Card.Img variant="top" src={`/images/${thumb}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Text>Platform: {platform}</Card.Text>
          <div style={{ marginTop: 'auto' }}>
            <Button
              onClick={() => {
                props.setSelectedProject(props.project);
              }}
              style={{ marginRight: 10 }}
            >
              Se more
            </Button>
            {website && (
              <IconContainer link={website} small>
                <FaGlobe size="25" />
              </IconContainer>
            )}
            {github && (
              <IconContainer link={github} small>
                <FaGithub size="25" />
              </IconContainer>
            )}
            {playstore && (
              <IconContainer link={playstore} small>
                <FaGooglePlay size="25" />
              </IconContainer>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectListItem;
