import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* Logo and Description Section */}
      <div className={styles.logoSection}>
        <img
          src="/logo.png" 
          alt="Stellar Consultancy Logo"
          className={styles.logoImage}
        />
        <p className={styles.logoDescription}>
          A Premier firm of professionals providing result-oriented investor documents with an unparalleled commitment to customer service and satisfaction.
        </p>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#">
            <img src="/facebook-icon.png" alt="Facebook" className={styles.socialIcon} />
          </a>
          <a href="#">
            <img src="/instagram-icon.png" alt="Instagram" className={styles.socialIcon} />
          </a>
          <a href="#">
            <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={styles.linksSection}>
        <div>
          <h4 className={styles.sectionTitle}>Navigate</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}><a href="/#aboutus">About</a></li>
            <li className={styles.linkItem}><a href="/#aboutus">Our Team</a></li>
            <li className={styles.linkItem}><a href="/#clients">Our Clients</a></li>
            <li className={styles.linkItem}><a href="/#contactus">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.sectionTitle}>Services</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}><a href="/business-plan">Business Plan</a></li>
            <li className={styles.linkItem}><a href="/pitch-deck">Pitch Deck</a></li>
            <li className={styles.linkItem}><a href="/financial-model">Financial Model</a></li>
            <li className={styles.linkItem}><a href="/our-services">Our Services</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
