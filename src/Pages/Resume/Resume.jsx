import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BadgeIcon from '@mui/icons-material/Badge';
import SubTilte from '../../Components/SubTilte/SubTilte';
import Styles from './Resume.module.css';

const Resume = () => {
  return (
    <main className={Styles.main}>
      <PageTitle title="Resume" icon={ <BadgeIcon /> } />

      <section className={Styles.Resume}>
        {/* <div className="container"> */}
            {/* <!-- row1 --> */}
            <div className="row mb-4">
                {/* <!-- 1 --> */}
                <div className="col-lg-6 col-md-12">

                    {/* <!-- title text --> */}
                    <SubTilte SubTilte="Experience" />

                    <ul>
                        {/* <!-- 1 --> */}
                        <li>
                            <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>Real Estate Supervisor</h5>
                                <h6>Mohamed Hussien , Giza, EGY</h6>
                                <p>Follow up on construction materials and completed tasks, send daily reports and pay
                                    fees to contractors</p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>Present</span>
                                <span className={Styles.from}>MAR21</span>
                            </div>
                        </li>

                        {/* <!-- 2 --> */}
                        <li>
                            <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>Aviation Consultant</h5>
                                <h6>Seera Group Company, Cairo, KSA</h6>
                                <p>I provided Aviation booking service and made a high perhtmlFormance in this sector.</p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>FEB21</span>
                                <span className={Styles.from}>JUL19</span>
                            </div>
                        </li>

                        {/* <!-- 3 --> */}
                        <li>
                            <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>Travel Consultant</h5>
                                <h6>Ocean Tours Company, Cairo, EGY</h6>
                                <p>I provided Hotels booking service and Touristic programs.</p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>MAY19</span>
                                <span className={Styles.from}>AUG18</span>
                            </div>
                        </li>

                    </ul>

                </div>
                {/* <!-- 2 --> */}
                <div className="col-lg-6 col-md-12">

                    {/* <!-- title text --> */}
                    <SubTilte SubTilte="Education" />

                    <ul>
                        {/* <!-- 1 --> */}
                        <li>
                            <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>Full stack development</h5>
                                <h6>Route Academy</h6>
                                <p>I attended this diploma to learn more about Frontend and backend and it took around
                                    ten months. Now I'm able
                                    to develop full website.</p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>NOV21</span>
                                <span className={Styles.from}>FEB21</span>
                            </div>
                        </li>

                        {/* <!-- 2 --> */}
                        <li>
                            <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>Amadeus System Diploma</h5>
                                <h6>Egyptair Airline</h6>
                                <p>I attended this diploma to learn more about booking airlines travel tickets.
                                    It is an internal system which is used globally in the Airline companies.
                                </p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>AUG18</span>
                                <span className={Styles.from}>JUL18</span>
                            </div>
                        </li>

                        {/* <!-- 3 --> */}
                        <li>
                          <div className={Styles.line}></div>

                            <div className={Styles.content}>
                                <h5>BSc in Tourism Studies</h5>
                                <h6>Faculty of Tourism and Hotels Management</h6>
                                <p>Studied Tourism Studies. and I got GPA Very Good.</p>
                            </div>

                            <div className={Styles.years}>
                                <span className={Styles.to}>JUN18</span>
                                <span className={Styles.from}>OCT14</span>
                            </div>
                        </li>

                    </ul>

                </div>
                {/* <!-- 0 --> */}
            </div>

            <hr />

            {/* <!-- row2 --> */}
            <div className="row mb-4">

                {/* <!-- front --> */}
                <div className="col-lg-6 col-md-12 p-3">
                    {/* <!-- title text --> */}
                    <SubTilte SubTilte="Frontend Skills" />

                    <ul className={Styles.progress_list}>
                        {/* <!-- 1 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="HTML">HTML</label>
                                <span>95%</span>
                            </div>

                            <progress id="HTML" value="95" max="100"></progress>
                        </li>

                        {/* <!-- 2 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="CSS">CSS</label>
                                <span>95%</span>
                            </div>

                            <progress id="CSS" value="95" max="100"></progress>
                        </li>

                        {/* <!-- 3 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="Bootstrap">Bootstrap</label>
                                <span>95%</span>
                            </div>

                            <progress id="Bootstrap" value="95" max="100"></progress>
                        </li>

                        {/* <!-- 4 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="JavaScript">JavaScript</label>
                                <span>90%</span>
                            </div>

                            <progress id="JavaScript" value="90" max="100"></progress>
                        </li>

                        {/* <!-- 5 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="React">React.js</label>
                                <span>90%</span>
                            </div>

                            <progress id="React" value="90" max="100"></progress>
                        </li>

                    </ul>

                </div>

                {/* <!-- design --> */}
                <div className="col-lg-6 col-md-12 p-3">
                    {/* <!-- title text --> */}
                    <SubTilte SubTilte="Design Skills" />

                    <ul className={Styles.progress_list}>

                        {/* <!-- 1 --> */}
                        <li>

                            <div className={Styles.label_span}>
                                <label htmlFor="Photoshop">Photoshop</label>
                                <span>70%</span>
                            </div>

                            <progress id="Photoshop" value="70" max="100"></progress>
                        </li>

                        {/* <!-- 2 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="AdobeXD">Adobe XD</label>
                                <span>50%</span>
                            </div>

                            <progress id="AdobeXD" value="50" max="100"></progress>
                        </li>

                        {/* <!-- 3 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="Figma">Figma</label>
                                <span>50%</span>
                            </div>

                            <progress id="Figma" value="50" max="100"></progress>
                        </li>

                    </ul>

                </div>

                {/* <!-- back --> */}
                <div className="col-lg-6 col-md-12 p-3">
                    {/* <!-- title text --> */}
                    <SubTilte SubTilte="Backend Skills" />

                    <ul className={Styles.progress_list}>
                        {/* <!-- 1 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="Php">Php</label>
                                <span>80%</span>
                            </div>

                            <progress id="Php" value="80" max="100"></progress>
                        </li>

                        {/* <!-- 2 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="Laravel">Laravel</label>
                                <span>50%</span>
                            </div>

                            <progress id="Laravel" value="50" max="100"></progress>
                        </li>

                        {/* <!-- 3 --> */}
                        <li>
                            <div className={Styles.label_span}>
                                <label htmlFor="MySql">MySql</label>
                                <span>80%</span>
                            </div>

                            <progress id="MySql" value="80" max="100"></progress>
                        </li>

                    </ul>

                </div>

            </div>
        {/* </div> */}
      </section>
    </main>
  )
}

export default Resume;