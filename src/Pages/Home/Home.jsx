import React, { useEffect } from 'react';
import Styles from './Home.module.css';

const Home = () => {
  
  useEffect(()=>{
    let text = 'F';
    let myTitle = 'ront-End Developer';
    let counter = 0;
    function write(){
      if (counter <= myTitle.length) {
        counter++
        text += Array.from(myTitle)[counter];
      }

      if(counter === myTitle.length ) {
        counter = 0;
        text = 'F';
      }
      
      setTimeout(write, 400); 
      document.getElementById('title').innerHTML = text;
    };

    write()
  })

  return (
    <main className={Styles.main}>
      <section className={Styles.Home}>
          <div className={Styles.ovarlay}></div>
          <div className={Styles.caption}>
              <h1>Ahmed <span>Abdel-Aziz</span></h1>
              <p id='title'></p>
          </div>
      </section>
    </main>
  )
}

export default Home