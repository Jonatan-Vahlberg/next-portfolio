import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import IconContainer from './IconContainer';
import styles from './Footer.module.css';

const Footer: React.FC<{}> = (props) => {
  return (
    <footer style={{ padding: 20 }}>
      <div className={styles.container}>
        <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
          <IconContainer link="https://github.com/Jonatan-Vahlberg">
            <FaGithub size="35" />
          </IconContainer>
          <IconContainer link="https://www.linkedin.com/in/jonatan-ramses-vahlberg-b9185613a/">
            <FaLinkedin size="35" />
          </IconContainer>
        </div>
        <p className={styles.name}>Jonatan Vahlberg &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
