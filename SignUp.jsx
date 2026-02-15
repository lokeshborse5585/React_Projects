import React, { useState } from 'react';
import styles from './SignUp.module.css';

const SignUp = ({ onBack, onRegister }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.length === 10) {
      onRegister({ name, contact, email }); // 👈 email bhi save
    } else {
      alert("Please enter a valid 10-digit number.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <h2 className={styles.brand}>Hb Unisex Salon - Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            required
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile Number (10 digits)"
            required
            className={styles.input}
            onChange={(e) => setContact(e.target.value)}
          />
          <button type="submit" className={styles.btn}>
            Register & Save Details
          </button>
        </form>
        <button onClick={onBack} className={styles.backBtn}>
          Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
