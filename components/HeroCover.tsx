import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import colors from '../static/colors';

import styles from './HeroCover.module.css';

const HeroCover: React.FC<{}> = () => {
  return (
    <Jumbotron style={{ background: colors.background }} fluid>
      <Container fluid="lg" className={styles.container}>
        <h1 style={{ color: colors.highlight }}>Jonatan Vahlberg</h1>
        <h3 style={{ color: colors.text }}>Applications for all your problems.</h3>
      </Container>
    </Jumbotron>
  );
};

export default HeroCover;
