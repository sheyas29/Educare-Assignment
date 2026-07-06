import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Welcome to PopX
      </h1>

      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        onClick={() => navigate('/signup')}
        className={styles.btnPrimary}
      >
        Create Account
      </button>

      <button
        onClick={() => navigate('/login')}
        className={styles.btnSecondary}
      >
        Already Registered? Login
      </button>
    </div>
  );
}
