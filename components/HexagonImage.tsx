import React from 'react';
import styles from './HexagonImage.module.css';

const HexagonImage: React.FC<{ width: number | string; height: number | string; image: string; centered: boolean }> = ({ centered = false, image = '', height, width }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: 'solid black 3px',
        margin: centered ? '0 auto' : '0',
      }}
      className={styles.hexagonWrapper}
    >
      <div className={styles.hexagon}>
        <div
          className={styles.hexagonIn}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    </div>
  );
};

export default HexagonImage;
