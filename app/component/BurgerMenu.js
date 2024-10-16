'use client'

import { useState } from 'react';
import styles from './BurgerMenu.module.css'; // Assuming you use CSS Modules
import Dropdown from './dropdown';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    
        <ul>
        <li>  <a href="/">Home</a></li>
        <li>  <Dropdown title={"Past Work"} links={["Business Plan Samples", "Pitch Deck Samples"]} /> </li>
        <li>   <Dropdown title={"Our Services"} links={["Business Plan", "Pitch Deck", "Financial Model", "CFO Services"]} /></li>
        <li>  <a href="#clients">Clients</a></li>
        <li>  <a href="#aboutus">About Us</a></li>
        <li>  <a href="#contactus">Contact Us</a></li>
        <li>  <a href="">Start Project</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default BurgerMenu;
