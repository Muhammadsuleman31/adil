
import styles from "./Nav.module.css"
import BurgerMenu from "./BurgerMenu"
import Dropdown from "./dropdown";
import Link from 'next/link';


const Nav = ()=>{


    return (
        <div className={styles.nav}>
          <div className={styles.name}>AS GLOBAL</div>
          <div className={styles.links}>
          <a href="/">Home</a>
          <Dropdown title={"Past Work"} links={["Business Plan Samples", "Pitch Deck Samples"]} />          
          <Dropdown title={"Our Services"} links={["Business Plan", "Pitch Deck", "Financial Model", "CFO Services"]} />          
          <a href="/#clients">Clients</a>
          <a href="/#aboutus">About Us</a>
          <a href="/#contactus">Contact Us</a>
          </div>
          <div className={styles.project}>  <button className={styles.ctabutton}>Start Your Project</button></div>
          <BurgerMenu/>
        </div>
    )
}

export default Nav