import React, { useState, useEffect } from 'react';
import styles from './MobileContainer.module.css';

export default function MobileContainer({ children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const scaleH = vh < 852 ? (vh - 40) / 812 : 1;
      const scaleW = vw < 415 ? (vw - 40) / 375 : 1;
      setScale(Math.min(scaleH, scaleW, 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={styles.outerWrapper}
      style={{
        width: `${375 * scale}px`,
        height: `${812 * scale}px`
      }}
    >
      <div 
        className={styles.innerContainer}
        style={{
          transform: `scale(${scale})`
        }}
      >
        {children}
      </div>
    </div>
  );
}
