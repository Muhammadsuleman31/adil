import styles from './PricingSection.module.css';

function PricingSection() {
  return (
    <div className={styles.pricingSection}>
      <h1>Pricing</h1>
      <p className={styles.subText}>
        When it comes to pricing, we understand that every business is unique.
        That’s why we offer customized pricing packages that are tailored to your specific needs.
      </p>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingCard}>
          <h3>Design That Wins</h3>
          <div className={styles.price}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>55</span>
            <span className={styles.per}>/slide</span>
          </div>
          <p>Pitch Deck Design Only</p>
          <ul>
            <li>Review & Consultation</li>
            <li>Slides As Per Needed</li>
            <li>Custom Design</li>
            <li>Designed Deck</li>
          </ul>
          <a className={styles.anchor} href="#contactform">
          <button className={styles.ctabutton}>Contact Us</button>
          </a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Essential Pitch</h3>
          <div className={styles.price}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>3,995</span>
          </div>
          <p>Investor Ready Pitch Deck without Projections</p>
          <ul>
            <li>Review & Consultation</li>
            <li>Up to 25 slides</li>
            <li>Custom Design</li>
            <li>Narrative & Storyline</li>
            <li>Market Research</li>
            <li>Reading Deck</li>
          </ul>
          <a className={styles.anchor} href="#contactform">
          <button className={styles.ctabutton}>Contact Us</button>
          </a>
        </div>

        <div className={`${styles.pricingCard} ${styles.highlight}`}>
          <h3>Fundraising Pro</h3>
          <div className={styles.price}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>7,495</span>
          </div>
          <p>Investor Ready Pitch Deck with Financial Projections</p>
          <ul>
            <li>Review & Consultation</li>
            <li>Up to 25 slides</li>
            <li>Custom Design</li>
            <li>Narrative & Storyline</li>
            <li>Market Research</li>
            <li>Presentation Deck</li>
            <li>Reading Deck</li>
            <li>Teaser Deck</li>
            <li>Financial Projections</li>
          </ul>
          <a className={styles.anchor} href="#contactform">
          <button className={styles.ctabutton}>Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
