import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './IconContainer.module.css';
const IconContainer: React.FC<{ color?: { hover: string; normal: string } }> = ({ children, color }) => {
  return (
    <div style={{}} className={styles.iconContainer}>
      {children}
      <style></style>
    </div>
  );
};

export default IconContainer;
