import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Signin to your PopX account
      </h1>

      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Email Address */}
      <Input 
        label="Email Address" 
        placeholder="Enter email address" 
        top={204} 
        left={20} 
      />

      {/* Password */}
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter password" 
        top={267} 
        left={20} 
      />

      <button
        onClick={() => navigate('/settings')}
        className={styles.btnLogin}
      >
        Login
      </button>
    </div>
  );
}
