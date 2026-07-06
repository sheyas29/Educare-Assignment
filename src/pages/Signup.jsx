import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import styles from './Signup.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('Yes');

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Create your PopX account
      </h1>

      <Input label="Full Name*" defaultValue="Marry Doe" top={140} left={20} />
      <Input label="Phone number*" defaultValue="Marry Doe" top={204} left={20} />
      <Input label="Email address*" defaultValue="Marry Doe" top={268} left={20} />
      <Input label="Password *" type="password" defaultValue="Marry Doe" top={332} left={20} />
      <Input label="Company name" defaultValue="Marry Doe" top={396} left={20} />

      {/* Are you an Agency? */}
      <div className={styles.agencyLabel}>
        Are you an Agency?<span style={{ color: '#FF0000' }}>*</span>
      </div>

      {/* Radio buttons group */}
      <div className={styles.radioGroup}>
        {/* Yes Radio */}
        <div className={styles.radioOption} onClick={() => setIsAgency('Yes')}>
          <div 
            className={styles.radioCircle}
            style={{ border: isAgency === 'Yes' ? '1px solid #642AF5' : '1px solid #CBCBCB' }}
          >
            {isAgency === 'Yes' && <div className={styles.radioInner}></div>}
          </div>
          <span className={styles.radioText}>Yes</span>
        </div>

        {/* No Radio */}
        <div className={styles.radioOption} onClick={() => setIsAgency('No')}>
          <div 
            className={styles.radioCircle}
            style={{ border: isAgency === 'No' ? '1px solid #642AF5' : '1px solid #CBCBCB' }}
          >
            {isAgency === 'No' && <div className={styles.radioInner}></div>}
          </div>
          <span className={styles.radioText}>No</span>
        </div>
      </div>

      {/* Create Account button */}
      <button
        onClick={() => navigate('/settings')}
        className={styles.btnSubmit}
      >
        Create Account
      </button>
    </div>
  );
}
