import styles from "./financial-model.module.css"
import Image from 'next/image';
import Link from 'next/link';

export default function Finalcialmodel(){
    return(
        <>
        <div className={styles.herobg}>
        <div className={styles.hero}>
        <div className={styles.hero1}>Financial Models Used In $125M Fundraises</div>
        <div className={styles.hero2}>Investor Grade Financial Model</div>
        <div className={styles.herolist}>
              <div className={styles.herolistitem}>Market Benchmaked Numbers</div>
              <div className={styles.herolistitem}>Easy to Use & Dynamic</div>
              <div className={styles.herolistitem}>100% Tailored & Bespoke</div>
        </div>
        <a className={styles.anchor} href="#contactform"><button className={styles.ctabutton}>Book Your Call Now</button></a>
        </div>
        </div>
        <div className={styles.entire}>
        <div className={styles.component}>
          <div className={styles.componenttext}>Key compoments of Finalcial Model</div>
          <div className={styles.componentlist}>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>🎞</div>
                   <div className={styles.componentdes}>Assumption</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>⚙</div>
                   <div className={styles.componentdes}>Revenue Planning</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>📃</div>
                   <div className={styles.componentdes}>Cost Structures</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>✉</div>
                   <div className={styles.componentdes}>CAPEX planning</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>⏱</div>
                   <div className={styles.componentdes}>Dashboarding</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>📈</div>
                   <div className={styles.componentdes}>Resource Planning</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>⏱</div>
                   <div className={styles.componentdes}>Future Planning</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>✉</div>
                   <div className={styles.componentdes}>Breakeven Analysis</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>⚙</div>
                   <div className={styles.componentdes}>Finaning Needs</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>🎞</div>
                   <div className={styles.componentdes}>Proforma Statements</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>🎞</div>
                   <div className={styles.componentdes}>Valuations</div>
              </div>
              <div className={styles.componentitem}>
                   <div className={styles.componenticon}>⌨</div>
                   <div className={styles.componentdes}>Ratio Analysis</div>
              </div>
          </div>
        </div>
        <div className={styles.whyContainer}>
      <h2 className={styles.whyTitle}>
        Why Do Businesses Need Professional Financial Modelling Services
      </h2>
      <p className={styles.whyDescription}>
        Our <span className={styles.whyHighlight}>Financial Modeling Services</span> are designed from an investor’s perspective, focusing on what matters most to them. We understand investors seek clarity and confidence in <span className={styles.whyHighlight}>Financial Projections</span> to make informed decisions.
      </p>
      <ul className={styles.whyList}>
        <li className={styles.whyListItem}>
          <span className={styles.whyHighlight}>Investor-Driven Financial Models</span> highlight potential returns and risks.
        </li>
        <li className={styles.whyListItem}>
          <span className={styles.whyHighlight}>Strategic Financial Projections</span> underscore your business’s growth potential.
        </li>
        <li className={styles.whyListItem}>
          <span className={styles.whyHighlight}>Tailored Financial Statements</span> reflect your understanding of market dynamics.
        </li>
      </ul>
      <p className={styles.whyFooter}>
        By aligning our <span className={styles.whyHighlight}>Consulting Services</span> with investor priorities, we ensure your <span className={styles.whyHighlight}>Pitch Deck</span> and <span className={styles.whyHighlight}>Business Plan</span> resonate, demonstrating not just viability but the value your venture brings to the table.
      </p>
    </div>
    <div className={styles.stepContainer}>
      <h2 className={styles.stepTitle}>
        4-Step Process To Create Investor Grade Financial Model
      </h2>

      <div className={styles.stepSection}>
        <h3 className={styles.stepHeader}>Step 1 - Startup Insight Gathering</h3>
        <p className={styles.stepDescription}>
          We start by diving deep into your startup’s unique needs, requirements, and business model. This foundational step ensures our financial models align perfectly with your vision.
        </p>
        <ul className={styles.stepList}>
          <li className={styles.stepListItem}>Analyze your business structure and goals.</li>
          <li className={styles.stepListItem}>Understand your market positioning and strategy.</li>
        </ul>
      </div>

      <div className={styles.stepSection}>
        <h3 className={styles.stepHeader}>Step 2 - Assumption Benchmarking</h3>
        <p className={styles.stepDescription}>
          Next, we gather and benchmark critical assumptions against industry standards, ensuring your financial projections are realistic and grounded.
        </p>
        <ul className={styles.stepList}>
          <li className={styles.stepListItem}>Collect key financial and operational assumptions.</li>
          <li className={styles.stepListItem}>Benchmark these against industry norms for accuracy.</li>
        </ul>
      </div>

      <div className={styles.stepSection}>
        <h3 className={styles.stepHeader}>Step 3 - Draft Model Review</h3>
        <p className={styles.stepDescription}>
          We then share a draft financial model, meticulously sense-checked from an investor’s perspective to ensure it meets the stringent criteria investors look for.
        </p>
        <ul className={styles.stepList}>
          <li className={styles.stepListItem}>Present a comprehensive draft financial model.</li>
          <li className={styles.stepListItem}>Perform investor-focused sense checks on all metrics.</li>
        </ul>
      </div>

      <div className={styles.stepSection}>
        <h3 className={styles.stepHeader}>Step 4 - Founder Walkthrough</h3>
        <p className={styles.stepDescription}>
          Finally, we conduct a detailed walkthrough with you, the founders, boosting your confidence in the numbers and the model as you gear up for fundraising.
        </p>
        <ul className={styles.stepList}>
          <li className={styles.stepListItem}>Clarify any queries about the financial model.</li>
          <li className={styles.stepListItem}>Ensure founders are fully prepared to discuss their model with investors.</li>
        </ul>
      </div>
    </div>

        </div>
        </>
    )
}