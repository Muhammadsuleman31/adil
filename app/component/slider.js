'use client'
import React, { useState } from 'react';
import styles from './slider.module.css';






const testimonials = [
    {
      text: 'I have the utmost respect for Jamal both as a human being and as a professional. His work ethic and the quality of his outputs are truly industry leading. Having tried many other providers before having had the privilege of meeting Jamal I can inform you that he is a rare find and that I would be more than happy to act as a reference.',
      author: 'Andrew Firmenich',
      position: 'CEO - Quantifying Nature',
    },
    {
      text: '"I have the utmost respect for Jamal both as a human being and as a professional. His work ethic and the quality of his outputs are truly industry leading. Having tried many other providers before having had the privilege."',
      author: 'Jess Davis',
      position: 'CEO, Uberstate',
    },
    {
      text: '"I have the utmost respect for Jamal both as a human being and as a professional. His work ethic and the quality of his outputs are truly industry leading. Having tried many other providers before having had the privilege."',
      author: 'Jess Davis',
      position: 'CEO, Uberstate',
    },{
      text: '"I have the utmost respect for Jamal both as a human being and as a professional. His work ethic and the quality of his outputs are truly industry leading. Having tried many other providers before having had the privilege."',
      author: 'Jess Davis',
      position: 'CEO, Uberstate',
    },{
      text: '"I have the utmost respect for Jamal both as a human being and as a professional. His work ethic and the quality of his outputs are truly industry leading. Having tried many other providers before having had the privilege."',
      author: 'Jess Davis',
      position: 'CEO, Uberstate',
    },
    // Add more testimonials as needed
  ];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const moveSlide = (direction) => {
    const totalSlides = testimonials.length;
    
    let newSlide = currentSlide + direction ;
    if (newSlide >= totalSlides) {
      newSlide = 0;
    } else if (newSlide < 0) {
      newSlide = totalSlides - 1;
    }
    setCurrentSlide(newSlide);
  };
console.log(currentSlide)
  return (
    <div className={styles.sliderContainer}>
        <div className={styles.sliderText}>Here's What Startup Founders Have To Say About Us</div>
      <div
        className={styles.slider}
      >
        {testimonials.map((testimonial, index) => (
          <div
          style={{ transform: `translateX(-${(currentSlide * 104.5)}%)` }}
            className={`${styles.slide} ${index === currentSlide ? styles.active : index === (currentSlide - 1 + testimonials.length) % testimonials.length ? styles.prevSlide : index === (currentSlide + 1) % testimonials.length ? styles.nextSlide : ''}`}
            key={index}
          >
            <div className={styles.testimonial}>
              <p>{testimonial.text}</p>
              <h4>{testimonial.author}</h4>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className={styles.next} onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
}
