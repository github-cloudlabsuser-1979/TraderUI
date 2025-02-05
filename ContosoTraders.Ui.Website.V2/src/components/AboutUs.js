// ContosoTraders.Ui.Website.V2/src/components/AboutUs.js
import React from 'react';
import styles from './AboutUs.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <p className={styles.aboutUsText}>
        Welcome to Contoso Traders! We are a leading e-commerce company dedicated to providing the best products and services to our customers.
      </p>
      <img
        src="https://via.placeholder.com/600x400"
        alt="About Us"
        className={styles.aboutUsImage}
      />
    </div>
  );
};

export default AboutUs;