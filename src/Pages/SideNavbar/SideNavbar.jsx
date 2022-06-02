import React, { useState } from 'react';
import Styles from './SideNavbar.module.css';
import { Link } from 'react-router-dom';
import myPic from '../../images/others/Ahmed Abdelaziz.jpg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

const SideNavbar = () => {

  const [toggleShowNav, setToggleShowNav] = useState(true);
  
  const hideNav = {left : "-200px"}; 
  const showNav = {left : "0px"}; 

  const handleBurgerBtn = () => {
    setToggleShowNav(!toggleShowNav);
  }

  return (
    <>
      <nav style={ toggleShowNav === true ? hideNav : showNav }>
        
        {/* layout */}
        { toggleShowNav === true 
          ?
          <div onClick={handleBurgerBtn} className={Styles.layoutOff}></div> 
          :
          <div onClick={handleBurgerBtn} className={Styles.layout}></div>
        }
        

        {/* image */}
        <section className={Styles.navTop}>
          <img src={myPic} alt="Ahmed Abdelaziz" />
          <p>Ahmed Abdelaziz</p>
        </section>

        {/* pages links */}
        <ul className={Styles.pages} onClick={handleBurgerBtn}>
          <li>
            <Link to='/'><HomeIcon /> Home</Link>
          </li>
          
          <li>
            <Link to='/about'><PersonIcon /> About</Link>
          </li>

          <li>
            <Link to='/resume'><BadgeIcon /> Resume</Link>
          </li>
          
          <li>
            <Link to='/portfolio'><BusinessCenterIcon /> Portfolio</Link>
          </li>
          
          {/* <li>
            <Link to='/contact'><ConnectWithoutContactIcon/> Contact</Link>
          </li> */}

        </ul>

        {/* navBottom */}
        <section className={Styles.navBottom}>
          {/* icons */}

          <ul className={Styles.social}>
            
            <li>
              <a href='https://github.com/Aziz3010' rel="noreferrer" target="_blank" >
                <GitHubIcon />
              </a>
            </li>

            <li>
              <a href='https://www.linkedin.com/in/ahmedgomaa3/' rel="noreferrer" target='_blank'>
                <LinkedInIcon />
              </a>
            </li>

            <li>
              <a href='https://wa.me/201069855288' rel="noreferrer" target='_blank'>
                <WhatsAppIcon />
              </a>
            </li>

            <li>
              <a href='https://www.facebook.com/AhmedAbdelazizg' rel="noreferrer" target='_blank'>
                <FacebookIcon />
              </a>
            </li>

            <li>
              <a href='https://twitter.com/AAbdelazizg' rel="noreferrer" target='_blank'>
                <TwitterIcon />
              </a>
            </li>

            <li>
              <a href='https://www.instagram.com/aziz.tech200/' rel="noreferrer" target='_blank'>
                <InstagramIcon />
              </a>
            </li>

          </ul>

          <p>2022 © Ahmed Abdelaziz.<br/>All Right Reserved.</p>

        </section>

        {/* burger btn */}
        <div className={Styles.burgerBtn} onClick={ handleBurgerBtn }>
          { toggleShowNav === true ? <MenuIcon /> : <MenuOpenIcon /> }
        </div>

      </nav>
    </>
  )
}

export default SideNavbar;