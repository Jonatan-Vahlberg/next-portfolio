import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './IconContainer.module.css';
const IconContainer: React.FC<{ link: string; small?: boolean }> = ({ children, link, small }) => {
  return (
    <div style={{}} className={`${styles.iconContainer} ${small ? styles.small : ''}`}>
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default IconContainer;
