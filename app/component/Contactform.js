'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    industry: '',
    howDidYouHear: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    setStatusMessage(result.message);

    if (response.ok) {
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        website: '',
        industry: '',
        howDidYouHear: '',
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
            className={styles.input}
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            required
            className={styles.input}
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="Website"
            className={styles.input}
            value={formData.website}
            onChange={handleChange}
          />
          <input
            type="text"
            id="industry"
            name="industry"
            placeholder="Industry"
            className={styles.input}
            value={formData.industry}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="howDidYouHear"
            name="howDidYouHear"
            placeholder="How did you hear about us?"
            className={`${styles.input} ${styles.last}`}
            value={formData.howDidYouHear}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className={styles.spinner}></div>
          ) : (
            'Send'
          )}
        </button>
      </form>
      <p id="statusMessage" className={styles.statusMessage}>{statusMessage}</p>
    </div>
  );
}
