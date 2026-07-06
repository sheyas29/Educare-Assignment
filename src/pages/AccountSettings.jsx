import React from 'react';
import styles from './AccountSettings.module.css';
import avatarImg from '../assets/Ellipse 114/Ellipse 114.png';
import cameraIconImg from '../assets/Group 1585.svg';

export default function AccountSettings() {
  return (
    <div className={styles.container}>
      {/* Top white bar */}
      <div className={styles.headerBar}>
        <h1 className={styles.title}>
          Account Settings
        </h1>
      </div>

      {/* Avatar Image */}
      <div 
        className={styles.avatar}
        style={{ backgroundImage: `url("${avatarImg}")` }}
      ></div>

      {/* Camera Icon Overlay */}
      <div 
        className={styles.cameraIcon}
        style={{ backgroundImage: `url("${cameraIconImg}")` }}
      ></div>

      {/* User Info */}
      <h2 className={styles.userName}>
        Marry Doe
      </h2>

      <p className={styles.userEmail}>
        Marry@Gmail.Com
      </p>

      {/* Description */}
      <p className={styles.description}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      {/* Dotted Line */}
      <div className={styles.dottedLineTop}></div>

      {/* Bottom Dotted Line */}
      <div className={styles.dottedLineBottom}></div>
    </div>
  );
}
