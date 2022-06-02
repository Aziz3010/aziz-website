import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.PageNotFound}>
        <h1>Page Not Found</h1>
        
        <Link to="/" className={Styles.link}>
          <ArrowBack className={Styles.icon} />
          Back to Home page
        </Link>
      
      </section>
    </main>
  )
}

export default PageNotFound