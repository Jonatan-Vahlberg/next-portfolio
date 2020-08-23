import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import styles from './HeroCover.module.sass';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import IconContainer from '../IconContainer';

const HeroCover: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className={`d-sm-flex d-none row align-items-center justify-content-center m-0 ${styles.hero}`}>
        <div className="col-12 my-auto">
          <h1 className={styles.title}>Jonatan Vahlberg</h1>
          <h3 className="text-white">Applications for all your problems.</h3>
          <div className="row m-0">
            <IconContainer link="https://www.linkedin.com/in/jonatan-ramses-vahlberg-b9185613a/">
              <FaLinkedin size="35" />
            </IconContainer>
            <IconContainer link="https://github.com/Jonatan-Vahlberg">
              <FaGithub size="35" />
            </IconContainer>
            <IconContainer link="mailto:jonatan.ramses.vahlberg@gmail.com">
              <FaEnvelope size="35" />
            </IconContainer>
          </div>
        </div>
      </div>
    </div>
    // <Jumbotron style={{ background: colors.background }} fluid>
    //   <Container fluid="lg" className={styles.container}>
    //     <h1 style={{ color: colors.highlight }}>Jonatan Vahlberg</h1>
    //     <h3 style={{ color: colors.text }}>Applications for all your problems.</h3>
    //   </Container>
    // </Jumbotron>
  );
};

export default HeroCover;
