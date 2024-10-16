import styles from "./business-plan.module.css"
import Image from 'next/image';
import Testimonials from "../component/Testimonials";
import ContactForm from "../component/Contactform";
import Link from 'next/link';


const testimonialsData = [
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


export default function Businessplan(){
    return(
        <>
        <div className={styles.servicesbg}>
        <div className={styles.services}>
            <div className={styles.servicestext}>
                <div className={styles.servicesfs}>SERVICES</div>
                <div className={styles.servicess}>Investor Ready Business Plan</div>
                <div className={styles.servicest}>Creating an investor-ready business plan can be daunting, but it doesn't have to be.</div>
                <div className={styles.servicesf}>At Stellar Consultancy, we have a team of experienced business writers and financial analysts who can help you develop a professional, comprehensive, and compelling business plan that will make your company stand out to investors.</div>
                <div className={styles.servicesff}><a className={styles.anchor} href="#contactform"><button className={styles.ctabutton}>Get Started Now</button></a></div>
            </div>
            <div className={styles.container}>
                    <div className={styles.smallImage1}>
                    <Image
                           src="/images/defi.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="bottom"
                           />
                    </div>
                    <div className={styles.smallImage2}>
                    <Image
                           src="/images/defi.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="bottom"
                           />
                    </div>
                    <div className={styles.smallImage3}>
                    <Image
                           src="/images/defi.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="top"
                           />                    </div>
                    <div className={styles.smallImage4}>
                    <Image
                           src="/images/defi.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="top"
                           />                    </div>
                    <div className={styles.smallImage5}>
                    <Image
                           src="/images/defi.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="top"
                           />                    </div>
             </div>
            </div>
        </div>
        <div className={styles.usecase}>
            <div className={styles.usecaseTitle}>
                <h2>Use Cases Of Our Business Plans</h2>
            </div>
            <div className={styles.usecaseGrid}>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📷</div>
                    <div>SBA Loans</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📄</div>
                    <div>Investor Memo</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>💰</div>
                    <div>Venture Capital Funding</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>⚙️</div>
                    <div>Internal Planning & Management</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📊</div>
                    <div>Angel Investor Funding</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🔀</div>
                    <div>Mergers & Acquisition</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🏢</div>
                    <div>Franchise Applications</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🏦</div>
                    <div>Bank Loans</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>🙋</div>
                    <div>Crowd Funding Campaign</div>
                </div>
                <div className={styles.usecaseItem}>
                    <div className={styles.usecaseIcon}>📜</div>
                    <div>Grant Applications</div>
                </div>
            </div>
        </div>
        <div className={styles.resultbg}>
        <div className={styles.resulttext}>
            <div className={styles.resulttitle}>Trust us to help you create an <span className={styles.underlineeffect}>investor-ready business plan</span> that stands out and secures the funding you need</div>
            <div className={styles.resultdes}>
                <div className={styles.resultstart}>Pricing Start At</div>
                <div className={styles.resultprice}>$2,999</div>
            </div>
          </div>
          </div>
          <div className={styles.contentsContainer}>
            <h1 className={styles.contentsTitle}>Contents of a Business Plan</h1>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📄</span>
                    <span>Executive Summary</span>
                </div>
                <p className={styles.contentsDescription}>
                    A brief overview of the key elements of your business plan, including your company’s mission, products or services, target market, competitive advantage, and financial projections.
                </p>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🏢</span>
                    <span>Company Description</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📊</span>
                    <span>Industry Analysis</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🔍</span>
                    <span>Market Analysis</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🛠️</span>
                    <span>Product or Service Line</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>💼</span>
                    <span>Sales and Marketing Plan</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📝</span>
                    <span>Operations Plan</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>💵</span>
                    <span>Financial Projections</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📚</span>
                    <span>Appendices</span>
                </div>
            </div>
        </div>
        <div className={styles.whybg}>
        <div className={styles.whyContainer}>
            <div className={styles.whytext}>Why You Should Hire <span className={styles.underlineeffect}>Stellar Consultancy</span> For Your <span className={styles.underlineeffect}>Business Plans</span></div>
            <div className={styles.whylist}>
            <div className={styles.whylisttext}>Our business plan are designed to:</div>
            <div className={styles.whylistcontainer}>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>Clearly and effectively communicate your business's value proposition and objectives.</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>Show that you understand your target market and have a solid plan for reaching and serving that market.</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>Display your company's financial projections clearly and credibly.</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>Build a strong case for why investors should fund your business.</div>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.stepscontainer}>
            <div className={styles.stepstext}>
            <div className={styles.stepsf}>Our <span className={styles.underlineeffect}>5-Step Process</span> For Preparing Your <span className={styles.underlineeffect}>Business Plan</span></div>
            <div className={styles.stepss}>Trust us to help you create an investor-ready business plan that stands out and secures the funding you need</div>
            </div>
            <div className={styles.stepspoints}>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>1</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Market Research</div>
                        <div className={styles.steppointssdes}>Understand your target market, competitors, and industry trends to create a plan tailored to your customers' needs.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>2</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Define Value Proposition</div>
                        <div className={styles.steppointssdes}>Clearly articulate your business's unique benefits and solutions to set yourself apart.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>3</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Create Financial Projections</div>
                        <div className={styles.steppointssdes}>Include income statements, balance sheets, and cash flow statements to demonstrate your plan for profitability.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>4</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Write The Narrative</div>
                        <div className={styles.steppointssdes}>Describe the business concept, explain the problem you solve, and outline your strategy for growth and success.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>5</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Review And Revise</div>
                        <div className={styles.steppointssdes}>Proofread, ensure accuracy, and ensure the plan is easy to read and understand.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.testbg}>
        <div className={styles.testtitle}>Client Testimonials</div>
        <Testimonials testimonials={testimonialsData} />
        </div>
        <div className={styles.contactformbg} id="contactform">
        <ContactForm />
        </div>
        </>
    )
}