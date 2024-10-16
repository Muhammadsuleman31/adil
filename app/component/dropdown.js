'use client'
import styles from "./dropdown.module.css"
import { useState, useEffect } from "react";


const dropdown = ({title, links})=>{

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
          <div
          className={styles.dropdown}
          onMouseEnter={!isMobile ? toggleDropdown : null}
      onMouseLeave={!isMobile ? toggleDropdown : null}
      onClick={isMobile ? toggleDropdown : null} // Use click for mobile
        >
          {isMobile && dropdownOpen && <div className={styles.cross}>&#10539;</div>}
          <a className={styles.arrow} href="#">
            {title}{` `}
              <span className={dropdownOpen ? styles.arrowUp : styles.arrowDown}>
              &#11163;
            </span>
          </a>
          {dropdownOpen && <div className={styles.empty}></div>}
          {dropdownOpen && (
          <div className={styles.dropdownContent}>
          {links.map((link, index) => {
            // Remove spaces and convert to lowercase for the href
            const linkHref = link.replace(/\s+/g, '-').toLowerCase();
        
            return (
              <a className={styles.dropdownlinks} key={index} href={`${linkHref}`}>
                {link}
              </a>
            );
          })}
        </div>
          )}
        </div>
    )
}

export default dropdown