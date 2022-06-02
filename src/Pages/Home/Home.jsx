import React from 'react';
import Styles from './Home.module.css';

const Home = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.Home}>
          <div className={Styles.ovarlay}></div>
          <div className={Styles.caption}>
              <h1>Ahmed <span>Abdel-Aziz</span></h1>
              <p>Front-End Developer</p>
          </div>
      </section>
    </main>
  )
}

export default Home