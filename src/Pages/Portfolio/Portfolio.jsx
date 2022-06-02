import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <main className={Styles.main}>
      <PageTitle title="Portfolio" icon={ <BusinessCenterIcon /> } />
    </main>
  )
}

export default Portfolio