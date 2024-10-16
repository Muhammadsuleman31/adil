import styles from "./pitch-desk.module.css"
import Image from 'next/image';
import Testimonials from "../component/Testimonials";
import ContactForm from "../component/Contactform";
import Link from 'next/link';
import Pitchnumber from "../component/pitchnumber"
import PricingSection from "../component/PricingSection";

const testimonialsData = [
    {
        text: "Jamal, you guys are the best at what you do!! Thanks again for your hard work and dedication. I would recommend you to anyone who is seeking your service.",
        name: "Chris",
        title: "CEO Community Learning Village"
    },
    {
        text: "Jamal, you guys are the best at what you do!! Thanks again for your hard work and dedication. I would recommend you to anyone who is seeking your service.",
        name: "Chris",
        title: "CEO Community Learning Village"
    }
    // Add more testimonials as needed
];

export default function pitchdesk(){
    return(
        <>
        <div className={styles.servicesbg}>
        <div className={styles.services}>
            <div className={styles.servicestext}>
                <div className={styles.servicesfs}>SERVICES</div>
                <div className={styles.servicess}>Investor-Ready Pitch Deck</div>
                <div className={styles.servicest}>Secure funding for your business with a professional and compelling investor-ready pitch deck</div>
                <div className={styles.servicesf}>Stand out to investors and showcase your company's unique story with our expertly crafted pitch decks.</div>
                <div className={styles.servicesff}><a className={styles.anchor} href="#contactform"><button className={styles.ctabutton}>Get Started Now</button></a></div>
            </div>
            <div className={styles.container}>
                    <div className={styles.smallImage1}>
                    <Image
                           src="/images/pitchdesk.png"
                           alt="image"
                           layout="fill"
                           objectFit="contain"
                           />
                    </div>
             </div>
            </div>
            <Pitchnumber />
        </div>
       
          <div className={styles.contentsContainer}>
            <h1 className={styles.contentsTitle}>Contents of a Pitch Desk</h1>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📄</span>
                    <span>Problem Statement</span>
                </div>
                <p className={styles.contentsDescription}>
                    A description of the problem or gap in the market that your company is addressing 
                </p>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🏢</span>
                    <span>Solution</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📊</span>
                    <span>Value Proposition</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🔍</span>
                    <span>Product or Service Line</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>🛠️</span>
                    <span>Market Analysis</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>💼</span>
                    <span>Business Model</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📝</span>
                    <span>Traction</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>💵</span>
                    <span>Competitive Analysis</span>
                </div>
            </div>
            
            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📚</span>
                    <span>Financial Projections</span>
                </div>
            </div>

            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📚</span>
                    <span>Use of Funds</span>
                </div>
            </div>

            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📚</span>
                    <span>Teams</span>
                </div>
            </div>

            <div className={styles.contentsItem}>
                <div className={styles.contentsItemTitle}>
                    <span className={styles.contentsIcon}>📚</span>
                    <span>Call to Action</span>
                </div>
            </div>
            <div className={styles.contentp}>
            <p> It's worth noting that the contents of the pitch deck can vary depending on the industry, the size of the round, the stage of the company, and the target audience, but the above are the most common contents you will find in a pitch deck.</p>
            <br/>
            <p>The team at Stellar Consultancy will work with you to understand your specific needs and tailor the pitch deck accordingly to maximize the chances of success.</p>
            </div>
        </div>
        <div className={styles.whybg}>
        <div className={styles.whyContainer}>
            <div className={styles.whytext}>Our <span className={styles.underlineeffect}>Pitch Desk</span> includes the following</div>
            <div className={styles.whylist}>
            <div className={styles.whylistcontainer}>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>A visually appealing design to grab the attention of investors</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>A clear and concise message that effectively communicates the key aspects of your business</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>A strong narrative that highlights your company's unique value proposition and sets you apart from competitors</div>
                </div>
                <div className={styles.whycontineritem}>
                    <div className={styles.whyicon}>📝</div>
                    <div className={styles.whyicontext}>A data-driven approach that is backed by solid market research</div>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.stepscontainer}>
            <div className={styles.stepstext}>
            <div className={styles.stepsf}>How We Work: <span className={styles.underlineeffect}>Our 7 Step</span> Process</div>
            <div className={styles.stepss}>At Stellar Consultancy, we understand that creating an investor-ready pitch deck can be daunting. We've developed a simple process to make it easy for you.</div>
            </div>
            <div className={styles.stepspoints}>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>1</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Initial consultation</div>
                        <div className={styles.steppointssdes}>We will schedule a call to leam more about your business and discuss your pitch deck needs.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>2</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Narrative & Storytelling</div>
                        <div className={styles.steppointssdes}>We craft a compelling story that captures the attention of investors.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>3</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Research and Development</div>
                        <div className={styles.steppointssdes}>We conduct market research to understand your target market, competitors, and industry trends. Based on this research, we will develop a clear and compelling message that highlights your company's unique value proposition.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>4</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Design and Development</div>
                        <div className={styles.steppointssdes}>Our experienced designers will create a visually appealing and engaging pitch deck that effectively communicates your message.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>5</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Review and Revisions</div>
                        <div className={styles.steppointssdes}>We will provide a draft of the pitch deck for your review and feedback.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>6</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Final Delivery</div>
                        <div className={styles.steppointssdes}>Once the pitch deck is finalized, we will deliver the final versions in multiple formats, including PDF and PPT.</div>
                    </div>
                </div>
                <div className={styles.steppointsitem}>
                    <div className={styles.steppointsf}>7</div>
                    <div className={styles.steppointss}>
                        <div className={styles.steppointsstitle}>Follow-up and Support</div>
                        <div className={styles.steppointssdes}>We also provide ongoing support and follow-up to ensure that the pitch deck is working as expected and to help you with any questions you may have during the fundraising process.</div>
                    </div>
                </div>
            </div>
            <div className={styles.contentp}>
            <p>Throughout the process, you will have a dedicated project manager to guide you and ensure everything runs smoothly. We pride ourselves on fast turnaround times without compromising on quality.</p>
            </div>
        </div>
        <PricingSection />
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