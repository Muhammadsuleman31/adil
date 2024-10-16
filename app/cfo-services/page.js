import styles from "./CFO.module.css"
import Image from 'next/image';
import Testimonials from "../component/Testimonials";
import pricingstyles from "../component/PricingSection.module.css"


const stories = [
    {
        text: "Jamal, you guys are the best at what you do!! Thanks again for your hard work and dedication. I would recommend you to anyone who is seeking your service.",
        name: "Chris",
        title: "CEO Community Learning Village"
    },
    {
        text: "Suleman, you guys are the best at what you do!! Thanks again for your hard work and dedication. I would recommend you to anyone who is seeking your service.",
        name: "Chris",
        title: "CEO Community Learning Village"
    }
    // Add more testimonials as needed
];


export default function CFO(){
    return(
        <>
       
        <div className={styles.herobg}>
        <div className={styles.hero}>
        <div className={styles.hero1}>
             <div className={styles.text}>300+ Founders Served</div>
             <span className={styles.text}>Over $100M Raised</span>
             <span className={styles.text}>40+ Years of Experience</span>
        </div>
            <span className={styles.hero2}>Your Catalyst for Financial Transformation and Success</span>
            <div className={styles.hero3}><a className={styles.anchor} href="#contactform"><button className={styles.ctabutton}>Talk to an Expert</button></a></div>
        </div>
        </div>
        <div className={styles.services}>
          <div className={styles.servicesmain}>Choosing the Wrong Financial Strategy Can Be Expensive</div>
          <div className={styles.servicestext}>We all know that running a successful business is like navigating a minefield. Without proper financial management and strategy, it's easy to veer off course and run into BIG financial problems.</div>
          <span className={styles.servicesprob}>Problems that can cause:</span>
          <div className={styles.serviceslist}>
            
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Cash Flow Crisis</div>
              <div className={styles.servicesdes}>A staggering 82% of businesses struggle with inadequate working capital due to poor cash flow management skills and know-how. It's like walking on a tightrope without a safety net. One wrong step and your business could come crashing down. You don't want to stunt your financial stability, do you? </div>
             
              </div>
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Bookkeeping Blunders</div>
              <div className={styles.servicesdes}>With improper invoicing and record-keeping practices, you're playing a dangerous game of numbers that can undermine the trustworthiness of your financial records. No one likes to risk their business's financial integrity or second-guess the credibility of their records</div>
             
              </div>
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Planning Pitfalls</div>
              <div className={styles.servicesdes}>Inefficient financial planning and forecasting mean you'll be throwing darts in the dark, hoping for a target but never hitting the mark. Your business is held back, progress is hindered, and potential remains untapped.</div>
             
              </div>
              <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Competency Gap</div>
              <div className={styles.servicesdes}>Limited resources and the right expertise to handle complex financial tasks can shatter your business's core functions. The fallout? Missed opportunities, stress overload, and a fight to keep your business whole.</div>
             
              </div>
          </div>
        </div>
        <div className={styles.gamblebg}>
            <div className={styles.gamble}>
                <div className={styles.gamble1}>Don't Gamble With Your Business's Future!</div>
                <div className={styles.gamble2}>
                    <div className={styles.gamble2f}>At Stellar Consultancy, we specialize in guiding businesses like yours toward financial prosperity. Our financial specialists will help you chart a well-defined path, maximize your resources, and make every penny count.</div>
                    <br />
                    <div className={styles.gamble2s}>With our industry-leading virtual CFO, bookkeeping, and accounting services, we deliver a strategic blend of financial expertise, meticulous attention to detail, and scalable solutions designed to ignite business growth, safeguard your bottom line, and set you on a trajectory for lasting success.</div>
                </div>
                <div className={styles.gamble3}>Say goodbye to the burden of in-house bookkeepers and accountants, and save costs without compromising on quality with us.</div>
            </div>
        </div>
        <div className={styles.fuel}>Here's How We Fuel Your Business's Financial Performance</div>
        <div className={styles.cfogrid}>
           
           
        <div className={`${styles.griditem } ${styles.item1}`}>
               <div className={styles.gridimg}>
               <Image
                      src="/images/calculator.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                />
               </div>
            </div>
            <div className={`${styles.griditem } ${styles.item2}`}>
                <div className={styles.cfotitle}>Financial Planning and Forecasting</div>
                <div className={styles.cfodes}>Gain crystal clarity and control over your financial future with our laser- focused planning and forecasting services. We'll help you sail through the ever-changing financial landscape, anticipate market trends, and steer your business toward sustained growth and revenue generation.</div>
            </div>
           
           
            <div className={`${styles.griditem } ${styles.item3}`}>
                <div className={styles.cfotitle}>Bookkeeping and Accounting</div>
                <div className={styles.cfodes}>Experience peace of mind as we handle the nitty-gritty of your bookkeeping and accounting in a timely and accurate manner. We'll keep your financial records in impeccable order, ensuring maximum precision and transparency and giving you the confidence to focus on what you do best - building your business.</div>
            </div>
            <div className={`${styles.griditem } ${styles.item4}`}>
               <div className={styles.gridimg}>
               <Image
                      src="/images/tax.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                />
               </div>
            </div>
           
           
            <div className={`${styles.griditem } ${styles.item5}`}>
               <div className={styles.gridimg}>
               <Image
                      src="/images/cash.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                />
               </div>
            </div>
            <div className={`${styles.griditem } ${styles.item6}`}>
                <div className={styles.cfotitle}>Financial Analysis and Reporting</div>
                <div className={styles.cfodes}>Uncover valuable insights into your business's financial health with our comprehensive analysis and reporting services. Our experts will dig deep into your financial data, identify key improvement areas, and provide clear, actionable (monthly/quarterly/annual) reports that empower you to make informed decisions, avoid costly errors, and optimize your financial processes.</div>
            </div>
           
           
            <div className={`${styles.griditem } ${styles.item7}`}>
                <div className={styles.cfotitle}>Virtual CFO Services</div>
                <div className={styles.cfodes}>Elevate your financial strategy with our virtual CFO services. Our seasoned professionals will act as your reliable advisors, offering personalized guidance, cutting-edge frameworks, and deep industry knowledge to infuse your business with a new level of financial agility. Whether you're a budding startup or a small and developing business, we'll work closely with you to strengthen your financial foundation and unearth new directions for your operations.</div>
            </div>
            <div className={`${styles.griditem } ${styles.item8}`}>
               <div className={styles.gridimg}>
               <Image
                      src="/images/assist.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                />
               </div>
            </div>
        </div>
        <div className={styles.testbg}>
        <div className={styles.testtitle}>Stories of Trust, Results, and Partnership</div>
        <Testimonials testimonials={stories} />
        </div>
        <section className={styles.streamProcessSection}>
      <h2 className={styles.streamTitle}>Streamlined Process for Your Financial Success</h2>
      <div className={styles.streamSteps}>
        <div className={styles.streamStep}>
          <div className={styles.streamNumber}>1</div>
          <h3 className={styles.streamStepTitle}>Discovery Session</h3>
          <p className={styles.streamDescription}>
            We begin by conducting an in-depth consultation to thoroughly understand your business’s unique situation, existing challenges, and desired objectives.
          </p>
          <div className={`${styles.streamCircle} ${styles.streamCircle1}`}></div>
        </div>
        <div className={styles.streamStep}>
          <div className={styles.streamNumber}>2</div>
          <h3 className={styles.streamStepTitle}>Customized Blueprint</h3>
          <p className={styles.streamDescription}>
            From the insights gathered, we curate a bespoke proposal outlining the solutions we recommend to solve your most pressing pain points.
          </p>
          <div className={styles.streamCircle}></div>
        </div>
        <div className={styles.streamStep}>
          <div className={styles.streamNumber}>3</div>
          <h3 className={styles.streamStepTitle}>Efficient Onboarding</h3>
          <p className={styles.streamDescription}>
            Next, our team will reach out to you to gather all the crucial information, set up your accounts, and ensure a smooth transition.
          </p>
          <div className={styles.streamCircle}></div>
        </div>
        <div className={styles.streamStep}>
          <div className={styles.streamNumber}>4</div>
          <h3 className={styles.streamStepTitle}>Unwavering Support</h3>
          <p className={styles.streamDescription}>
            We believe in building enduring partnerships. That’s why you get continuous support and proactive communication with us.
          </p>
          <div className={styles.streamCircle}></div>
        </div>
      </div>
      <div className={styles.streamLine}>
      </div>
    </section>
    <div className={styles.teambg}>
    <div className={styles.team}>
        <div className={styles.teamtext}>Our Team is Expertly Trained in</div>
        <div className={styles.teamexpert}>
            <div className={styles.expertinlogo}> <Image
                      src="/images/qb.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                /></div>
            <div className={styles.expertinlogo}> <Image
                      src="/images/xero.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                /></div>
            <div className={styles.expertinlogo}> <Image
                      src="/images/sap.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                /></div>
            <div className={styles.expertinlogo}> <Image
                      src="/images/wave.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                /></div>
        </div>
    </div>
    </div>
    <div className={`${pricingstyles.pricingSection}`}>
      <h1 className={styles.plan}>Choose the Plan that Aligns with Your Business Stage</h1>
      <div className={pricingstyles.pricingContainer}>
        <div className={pricingstyles.pricingCard}>
          <h3>STARTUP</h3>
          <div className={pricingstyles.price}>
             <span className={`${pricingstyles.currency} ${styles.currency}`}>$</span>
            <span className={`${pricingstyles.amount} ${styles.amount}`}>750</span>
            <span className={`${pricingstyles.per} ${styles.per}`}>/month</span>
          </div>
          <p>Typical Client Size / Under 10 employees</p>
          <ul>
            <li>Reactive Service</li>
            <li>Scheduled Meetings - Up to 1x/Month</li>
            <li>Onboarding/5 Days</li>
            <li>Monthly book keeping</li>
            <li>Accounts payable and accounts receivable management (monthly)</li>
            <li>Payroll management</li>
            <li>Month-end reporting within 30 days of month-end</li>
            <li>Annual financial statements</li>
          </ul>
          <a className={pricingstyles.anchor} href="#contactform">
          <button className={pricingstyles.ctabutton}>Contact Us</button>
          </a>
        </div>
        
        <div className={pricingstyles.pricingCard}>
          <h3>EARLY STAGE</h3>
          <div className={pricingstyles.price}>
             <span className={`${pricingstyles.currency} ${styles.currency}`}>$</span>
            <span className={`${pricingstyles.amount} ${styles.amount}`}>1,500</span>
            <span className={`${pricingstyles.per} ${styles.per}`}>/month</span>
          </div>
          <p>Typical Client Size/10-20 employees</p>
          <ul>
            <li>Proactive Service</li>
            <li>Scheduled Meetings - Up to 2x/Month</li>
            <li>Onboarding/10 Days</li>
            <li>Monthly bookkeeping</li>
            <li>Accounts payable and accounts receivable management (monthly)</li>
            <li>Payroll management</li>
            <li>Bank reconciliation statements</li>
            <li>Month-end reporting (within 30 days of month-end)</li>
            <li>Annual financial statements</li>
            <li>Annual budget assistance</li>
            <li>Quarterly cashflow review</li>
          </ul>
          <a className={pricingstyles.anchor} href="#contactform">
          <button className={pricingstyles.ctabutton}>Contact Us</button>
          </a>
        </div>

        <div className={`${pricingstyles.pricingCard} ${pricingstyles.highlight}`}>
          <h3>GROWTH</h3>
          <div className={pricingstyles.price}>
            <span className={`${pricingstyles.currency} ${styles.currency}`}>$</span>
            <span className={`${pricingstyles.amount} ${styles.amount}`}>2,500</span>
            <span className={`${pricingstyles.per} ${styles.per}`}>/month</span>
          </div>
          <p>Typical Client Size / 20+ employees</p>
          <ul>
            <li>Strategic Service</li>
            <li>Scheduled Meetings - Up to 6x/Month</li>
            <li>Onboarding/14 Days</li>
            <li>Monthly bookkeeping</li>
            <li>Accounts payable and accounts receivable management (monthly)</li>
            <li>Payroll management</li>
            <li>Bank reconciliation statements</li>
            <li>Month-end reporting (within 30 days of month-end)</li>
            <li>Annual financial statements</li>
            <li>Annual budget assistance</li>
            <li>Quarterly cashflow review</li>
            <li>Budget Vs. Actual analysis - Quarterly</li>
            <li>AFinancial model support & updates</li>
            <li>Financial KPI check</li>
            <li>Dedicated CFO</li>
          </ul>
          <a className={pricingstyles.anchor} href="#contactform">
          <button className={pricingstyles.ctabutton}>Contact Us</button>
          </a>
        </div>
      </div>
      <div className={styles.optional}>
        <div className={styles.optionaltext}>Following services are also available, but are optional.</div>
        <div className={styles.optionallist}>
            <div>Department Performance</div>
            <div>Customized Dept Reports</div>
            <div>Company-Wide KPIs</div>
            <div>Resource Planning</div>
            <div>Business Tax Return</div>
        </div>
      </div>
    </div>
    <div className={styles.pager}>
    <div className={`${styles.services} ${styles.last}`}>
        
          <div className={`${styles.servicesmain} ${styles.lastmain}`}>Ready to Unlock Your Business's Financial Potential?</div>
          <div className={`${styles.servicestext} ${styles.lasttext}`}>Stop leaving your business's financial success to chance! Book a call with our experts today to explore how our innovative financial solutions can propel your business to remarkable new heights</div>
          <div className={`${styles.hero3} ${styles.lastbutton}`}><a className={styles.anchor} href="#contactform"><button className={styles.ctabutton}>Get Started Now</button></a></div>
     </div>
     </div>
        </>
    )
}