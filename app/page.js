
import Link from "next/link";
import styles from "./page.module.css";
import TestimonialSlider from './component/slider';
import Image from 'next/image';
import BurgerMenu from "./component/BurgerMenu";
import FAQ from "./component/FAQ"
import Footer from "./component/Footer"
import Nav from "./component/Nav"
import Counter from "./component/number";

export default function Home() {
  
  return (
   <>  
     <div className={styles.herobg}>
        <div className={styles.hero}>
           <span className={styles.f}>STRUGGLING TO RAISE FUNDING?</span>
           <span className={styles.s}>Discover How We Helped Our Clinets <span className={styles.itd}>Raise $400M in Funding</span></span>
           <span className={styles.t}>With the New S.E.E.D Funding System</span>
           <span className={styles.fo}>(This works even if you don't have time for fundraising or have never raised a penny before)</span>
           <span><button className={styles.ctabutton}> <span className={styles.bt}>Book a Call</span> </button></span> 
        </div>
        </div>   
        <div   className={styles.how}>
         <div className={styles.howtext}>Here's How We Will Secure You Investor Meetings Till You Close Your Round</div>
         <div className={styles.gridcontainer}>
             <div className={styles.griditem}>Identify Right Investors <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia voluptates .</span> </div>
             <div className={styles.griditem}>Create Investor Documents <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia voluptates .</span> </div>
             <div className={styles.griditem}>Customized Outreach Strategy <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia voluptates .</span> </div>
             <div className={styles.griditem}>Proactive Relationship Management <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia voluptates .</span> </div>
             <div className={styles.griditem}>Due Diligence Support <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia voluptates .</span> </div>
        </div>
            <button className={styles.ctabutton}>Start Your Project</button>
        </div>
        <div className={styles.result}>
          <div className={styles.resulttext}>
            <div className={styles.resulttitle}>We Have Produced <span className={styles.underlineeffect}>Massive Results</span> For Our Founder Clients</div>
            <div className={styles.resultdes}>Our Team Brings Over 50 years of M&A, Private Equity and fundraising Experrise</div>
          </div>
          <div className={styles.resultnumbers}>
            <div className={styles.industry}>+25 <span>Industries</span></div>
            <div className={styles.country}>+20 <span>Industries</span></div>
            <div className={styles.client}>+300 <span>Industries</span></div>
            <div className={styles.fund}>+$400M <span>Industries</span></div>
          </div>
        </div>
        <div id="clients" className={styles.logoContainer}>
    <img src="logo1.png" alt="Logo 1" className={styles.logo} />
    <img src="logo2.png" alt="Logo 2" className={styles.logo} />
    <img src="logo3.png" alt="Logo 3" className={styles.logo} />
    <img src="logo4.png" alt="Logo 4" className={styles.logo} />
    <img src="logo5.png" alt="Logo 5" className={styles.logo} />
    <img src="logo6.png" alt="Logo 6" className={styles.logo} />
    <img src="logo6.png" alt="Logo 6" className={styles.logo} />
    <img src="logo6.png" alt="Logo 6" className={styles.logo} />
</div>
        <div>
            <TestimonialSlider />
        </div>
        <div className={styles.services}>
          <div className={styles.servicesmain}>Our Services</div>
          <div className={styles.servicestext}>Our suite of services caters to entrepreneurs and startups seeking to make a lasting impression on potential investors</div>
          <div className={styles.serviceslist}>
            
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Investor Ready Business Plans</div>
              <div className={styles.servicesdes}>An investor-ready business plan is perfect for any startup or businesses for approaching their investors including venture capitalists, banks or angel investors and convince them for their funding in the business. </div>
              <div className={styles.serviceslearn}><span>Learn More </span>&gt;</div>
              </div>
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Financial Modeling</div>
              <div className={styles.servicesdes}>We create detailed financial models that provide realistic projections of your business's financial performance, helping you make informed decisions about your company's future.</div>
              <div className={styles.serviceslearn}><span>Learn More </span>&gt;</div>
              </div>
            <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Investor-ready Pitch Decks</div>
              <div className={styles.servicesdes}>We help companies create visually appealing and engaging pitch decks that communicate the key aspects of their business and convince investors to fund their venture</div>
              <div className={styles.serviceslearn}><span>Learn More </span>&gt;</div>
              </div>
              <div className={styles.servicesitem}>
              <div className={styles.serviceslogo}>logo</div>
              <div className={styles.servicesheading}>Investor Outreach</div>
              <div className={styles.servicesdes}>Our team will assist your company in identifying the ideal investors based on demographics, needs, size, company stage etc., using cold email outreach and Linkedin organic connections to reach out to the potential investors."</div>
              <div className={styles.serviceslearn}><span>Learn More </span>&gt;</div>
              </div>
          </div>
        </div>
        <div className={styles.past}>
          <div className={styles.past1}><Image
      src="/images/image1.png"
      alt="image"
       layout="fill"
        objectFit="cover"
    /></div>
          <div className={styles.past2}>
            <div className={styles.pastsubheading}>PORTFOLIO</div>
            <div className={styles.pastheading}>Business Plan</div>
            <div className={styles.pastdes}>We help companies create comprehensive and compelling business plans that are tailored to the needs of venture capitalists, banks, and angel investors. These plans are designed to persuade investors to fund your business.</div>
            <div className={styles.pastviewmore}><span>View More Business Plan Samples</span></div>
          </div>
          <div className={styles.past3}>
          <div className={styles.pastsubheading}>PORTFOLIO</div>
            <div className={styles.pastheading}>Investor-Grade Pitch Decks</div>
            <div className={styles.pastdes}>We help companies create visually appealing and engaging pitch decks that communicate the key aspects of their business and convince investors to fund their venture.</div>
            <div className={styles.pastviewmore}><span>View More Pitch Deck Samples</span></div>
          </div>
          <div className={styles.past4}><Image
      src="/images/image2.png"
      alt="image"
     layout="fill"
        objectFit="cover"
    /></div>
        </div>
        <div id="aboutus" className={styles.team}>
          <div className={styles.teamtext1}>Meet The Team</div>
          <div className={styles.teamtext2}>We  Bring Over 50 Years of Team experience.</div>
        </div>
        <div className={styles.members}>

          <div className={styles.member}>
            <div className={styles.memberprofile}><Image
                           src="/images/cropped-image.png"
                           alt="image"
                            height={150}
                            width={150}/>
                            </div>
            <div className={styles.membername}>Donald Trump</div>
            <div className={styles.memberqual}>ACA - Founder, Partner</div>
            <div className={styles.memberdes}>Jamal is a Chartered Accountant by profession and a Go-To-Expert for Investor Documents, Pitch decks & Business Plans. Jamal is a Board Member of 3 startups accumulatively worth $30 Million in Valuation and has served over 200 clients from over 20 countries.</div>
            <div className={styles.memberlink}><span>in</span></div>
          </div>
          
          <div className={styles.member}>
          <div className={styles.memberprofile}><Image
                           src="/images/cropped-image.png"
                           alt="image"
                            height={150}
                            width={150}/>
            </div>
            <div className={styles.membername}>Donald Trump</div>
            <div className={styles.memberqual}>ACA - Founder, Partner</div>
            <div className={styles.memberdes}>Jamal is a Chartered Accountant by profession and a Go-To-Expert for Investor Documents, Pitch decks & Business Plans. Jamal is a Board Member of 3 startups accumulatively worth $30 Million in Valuation and has served over 200 clients from over 20 countries.</div>
            <div className={styles.memberlink}><span>in</span></div>
          </div>
          
          <div className={styles.member}>
          <div className={styles.memberprofile}><Image
                           src="/images/cropped-image.png"
                           alt="image"
                            height={150}
                            width={150}/>
            </div>
            <div className={styles.membername}>Donald Trump</div>
            <div className={styles.memberqual}>ACA - Founder, Partner</div>
            <div className={styles.memberdes}>Jamal is a Chartered Accountant by profession and a Go-To-Expert for Investor Documents, Pitch decks & Business Plans. Jamal is a Board Member of 3 startups accumulatively worth $30 Million in Valuation and has served over 200 clients from over 20 countries.</div>
            <div className={styles.memberlink}><span>in</span></div>
          </div>

          <div className={styles.member}><div className={styles.memberprofile}><Image
                           src="/images/cropped-image.png"
                           alt="image"
                            height={150}
                            width={150}/>
            </div>
            <div className={styles.membername}>Donald Trump</div>
            <div className={styles.memberqual}>ACA - Founder, Partner</div>
            <div className={styles.memberdes}>Jamal is a Chartered Accountant by profession and a Go-To-Expert for Investor Documents, Pitch decks & Business Plans. Jamal is a Board Member of 3 startups accumulatively worth $30 Million in Valuation and has served over 200 clients from over 20 countries.</div>
            <div className={styles.memberlink}><span>in</span></div></div>

          <div className={styles.member}><div className={styles.memberprofile}><Image
                           src="/images/cropped-image.png"
                           alt="image"
                            height={150}
                            width={150}/>
            </div>
            <div className={styles.membername}>Donald Trump</div>
            <div className={styles.memberqual}>ACA - Founder, Partner</div>
            <div className={styles.memberdes}>Jamal is a Chartered Accountant by profession and a Go-To-Expert for Investor Documents, Pitch decks & Business Plans. Jamal is a Board Member of 3 startups accumulatively worth $30 Million in Valuation and has served over 200 clients from over 20 countries.</div>
            <div className={styles.memberlink}><span>in</span></div></div>
        </div>
        <FAQ />
        <div id='contactus' className={styles.book}>
          <div className={styles.book1}>Get started Now!</div>
          <div className={styles.book2}>Book a Strategy call with us and get started with your project now!</div>
          <div className={styles.book3}> <button className={styles.ctabutton}>Book A Call Now!</button> </div>
        </div>
          
        </>
  );
}
