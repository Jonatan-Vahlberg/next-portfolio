import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import IconContainer from './IconContainer';
import styles from './Footer.module.css';

const Footer: React.FC<{}> = (props) => {
  return (
    <footer style={{ padding: 20 }}>
      <div className={styles.container}>
        <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
          <IconContainer>
            <a href="https://github.com/Jonatan-Vahlberg" target="_blank">
              <FaGithub size="35" />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://www.linkedin.com/in/jonatan-ramses-vahlberg-b9185613a/" target="_blank">
              <FaLinkedin size="35" />
            </a>
          </IconContainer>
        </div>
        <p className={styles.name}>Jonatan Vahlberg &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
