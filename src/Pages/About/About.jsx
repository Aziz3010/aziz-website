import React, { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import PersonIcon from '@mui/icons-material/Person';
import Styles from './About.module.css';
import SubTilte from '../../Components/SubTilte/SubTilte';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import StorageIcon from '@mui/icons-material/Storage';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

const About = () => {

  const [showDetails1, setShowDetails1] = useState(true);
  const [showDetails2, setShowDetails2] = useState(false);

  const handleAccordion = (num) => {
    if ( num === 'first' ) {
      setShowDetails1(!showDetails1);
    } else if ( num === 'second' ) {
      setShowDetails2(!showDetails2);
    }
  }

  return (
    <main className={Styles.main}>
        <PageTitle title="About" icon={ <PersonIcon /> } />
        <section className={Styles.About}>
          {/* <!-- row -> infos--> */}
          <div className="row justify-content-between">
              {/* <!-- abt me --> */}
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className={Styles.about_Me}>
                      <h3>Full Stack Web Developer</h3>
                      <div className={Styles.accordion}>

                          {/* <!-- 1 --> */}
                          <div className={Styles.panel_heading} onClick={ () => { handleAccordion('first')} }>
                              <h4>University background</h4>
                              { showDetails1 ? <VisibilityOffIcon/> : <RemoveRedEyeIcon /> }
                          </div>

                          { showDetails1 && 
                            <div className={Styles.panel_content}>
                                <p><ArrowRightIcon /> My full name is Ahmed Mohammed Abdallah Abdelaziz. I'm 26 years old. I'm graduated from faculty of Tourism and Hotels Management - Tourism Studies Department at Helwan University. I got BSc in Tourism studies with GPA Very Good.</p>
                                <p><ArrowRightIcon /> then I got Amadeus System Diploma from Egyptair airlines to be able to book airlines tickets for clients.</p>
                                <p><ArrowRightIcon /> In addition to this I worked at Ocean Tours company for one year as Travel consultant and I provided Hotels booking service and Touristic programs.</p>
                                <p><ArrowRightIcon /> Then I worked at Seera Group it is Ksa company based in Egypt for two years as aviation consultant and I provided Aviation booking service and made a high performance in this sector.</p>
                            </div>
                          }

                          {/* <!-- software --> */}
                          <div className={Styles.panel_heading} onClick={ () => { handleAccordion('second')} }>
                              <h4>Software background</h4>
                              { showDetails2 ? <VisibilityOffIcon/> : <RemoveRedEyeIcon /> }
                          </div>

                          { showDetails2 && 
                            <div className={Styles.panel_content}>
                                <p><ArrowRightIcon /> I decided to shift my career because I'm seeking for study software field.</p>
                                <p><ArrowRightIcon /> So I got Full Stack Web Development Diploma at Route Academy it took around ten months. I studied Frontend and backend and now I'm able to develop full website using HTML, CSS, JavaScript, Bootstrap, React.js, Php, Laravel and MySql.</p>
                                <p><ArrowRightIcon /> In addition to this I code and develop alot of websites.</p>
                            </div>
                          }

                      </div>
                  </div>
              </div>

              {/* <!-- psn data --> */}
              <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className={Styles.personal_data}>
                      <h3>Personal Information</h3>
                      <ul>
                          <li><span>Name</span> : Ahmed Abdelaziz</li>
                          <li><span>Age</span> : 26 Years</li>
                          <li><span>Phone</span> : +2 0106 9855 288</li>
                          <li><span>Email</span> : a.abdelazizg@gmail.com</li>
                          <li><span>Address</span> : Al Mohandseen - Giza</li>
                          <li><span>Military status</span> : Exempted</li>
                          <li><span>Freelance</span> : Available</li>
                      </ul>
                  </div>
              </div>

          </div>

          {/* <!-- Services --> */}
          <div className={Styles.Services}>
              {/* <!-- title text --> */}
              <SubTilte SubTilte="Services" />
              {/* <!-- Service --> */}
              <div className="row">
                  <div className="col-md-4">
                      <div className={Styles.Service}>
                          <LaptopMacIcon />
                          <h5>Frontend Developer</h5>
                          <p>HTML | CSS | JavaScript | React</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className={Styles.Service}>
                          <StorageIcon />
                          <h5>Backend Developer</h5>
                          <p>Php | Laravel | MySql</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className={Styles.Service}>
                          <ScreenshotMonitorIcon />
                          <h5>Responsive Design</h5>
                          <p>Bootstrap</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </main>
  )
}

export default About