import styles from './our-services.module.css';

function Ourservices() {
  return (
    <>
    <div className={styles.hero}>
        <div className={styles.herotitle}>How We Help Businesses And Startups</div>
        <div className={styles.herodes}>We've helped over 400 businesses in business plans, market research financial models and pitch decks, and providing strategic advice that has generated over $75m in funding.</div>
        <div className={styles.herolist}>
            <div className={styles.heroitem}>
               <a className={styles.anchor} href="/business-plan"><button className={styles.ctabutton}>Business Plans</button></a>
            </div>
            <div className={styles.heroitem}>
               <a className={styles.anchor} href="/financial-model"><button className={styles.ctabutton}>Financial models</button></a>
            </div>
            <div className={styles.heroitem}>
               <a className={styles.anchor} href="pitch-deck"><button className={styles.ctabutton}>Pitch Decks</button></a>
            </div>
            <div className={styles.heroitem}>
               <a className={styles.anchor} href="#"><button className={styles.ctabutton}>Startup Package</button></a>
            </div>
        </div>
    </div>
    <div className={styles.usecasebg}>
    <div className={styles.usecase}>
            <div className={styles.usecaseTitle}>
                <span className={styles.process}>Our Process</span>
                <h2>How we work?</h2>
                <p className={styles.p}>We follow a simple and straight forward process to get things done in the most efficient way possible.</p>
            </div>
            <div className={styles.usecaseGrid}>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📝</div>
                    <div className={styles.usecasepoints}>
                    <div className={styles.usecaseheading}>Kickoff Meeting</div>
                    <p className={styles.usecasedes}>A short 15 mins call to understand your requirements and expectations</p>
                    </div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📝</div>
                    <div className={styles.usecasepoints}>
                    <div className={styles.usecaseheading}>Sharing of questionnaire</div>
                    <p className={styles.usecasedes}>We share a standard questionnaire to collect information about your company</p>
                    </div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📝</div>
                    <div className={styles.usecasepoints}>
                    <div className={styles.usecaseheading}>Providing first draft</div>
                    <p className={styles.usecasedes}>We provide first draft as per the timelines agreed for your first round of feedback</p>
                    </div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📝</div>
                    <div className={styles.usecasepoints}>
                    <div className={styles.usecaseheading}>Feedback and edits</div>
                    <p className={styles.usecasedes}>Based on your feedback and edits, we improve the documents and provide you with second draft</p>
                    </div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📝</div>
                    <div className={styles.usecasepoints}>
                    <div className={styles.usecaseheading}>Exit meeting</div>
                    <p className={styles.usecasedes}>Once the final version is delivered we hold a small exit meeting to answer any other question which you may have</p>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
        <div  className={styles.book}>
          <div className={styles.book1}>Get started Now!</div>
          <div className={styles.book2}>Book a Strategy call with us and get started with your project now!</div>
          <div className={styles.book3}> <button className={styles.ctabutton}>Book A Call Now!</button> </div>
        </div>
    </>
  );
}

export default Ourservices;
