import React from 'react';
import styles from './Input.module.css';

export default function Input({ label, type = 'text', placeholder, top, left, width = 335, defaultValue = '', labelColor = '#6C25FF' }) {
  const renderLabel = (text) => {
    if (text.endsWith('*')) {
      if (text.endsWith(' *')) {
        return (
          <>
            {text.slice(0, -2)}
            <span style={{ color: '#FF0000' }}> *</span>
          </>
        );
      }
      return (
        <>
          {text.slice(0, -1)}
          <span style={{ color: '#FF0000' }}>*</span>
        </>
      );
    }
    return text;
  };

  return (
    <div 
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: '40px'
      }}
    >
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={styles.inputField}
      />
      <label 
        className={styles.label}
        style={{ color: labelColor }}
      >
        {renderLabel(label)}
      </label>
    </div>
  );
}
