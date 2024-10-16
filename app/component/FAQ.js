import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>FAQs</h1>
      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>What is an Investor Ready Pitch Deck?</h2>
        <p className={styles.faqAnswer}>
          An Investor Ready Pitch Deck is a concise, compelling presentation designed to showcase your startup or project to potential investors. It highlights the business model, market opportunity, product or service, team, and financial projections in a clear and engaging way.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>How important is a Professional Business Plan for Investors?</h2>
        <p className={styles.faqAnswer}>
          A Professional Business Plan is crucial for attracting investors. It provides a detailed roadmap of your business, covering aspects like market analysis, operational strategy, financial planning, and growth projections. This comprehensive document helps investors understand the viability and potential of your venture.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>What services does Stellar Consultancy as Pitch Deck Agency offer?</h2>
        <p className={styles.faqAnswer}>
          Stellar Consultancy as a Pitch Deck Agency offers a range of services including concept development, content creation, graphic design, and storytelling. Their expertise lies in transforming complex business ideas into engaging and understandable presentations.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>How does working with Professional Pitch Deck Designers benefit my startup?</h2>
        <p className={styles.faqAnswer}>
          Professional Pitch Deck Designers bring a blend of creative design and business acumen to your project. They ensure that your pitch deck not only looks appealing but also accurately represents your business model and value proposition, increasing the chances of securing investment.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>What distinguishes an Investment Fund Pitch Deck from others?</h2>
        <p className={styles.faqAnswer}>
          An Investment Fund Pitch Deck is tailored specifically for investment funds. It emphasizes aspects like fund strategy, management team credentials, investment thesis, and past performance, catering to the sophisticated needs of institutional investors.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
