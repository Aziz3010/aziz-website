import React from 'react';
import './PageTitle.module.css';

const PageTitle = ({title , icon}) => {
  return (
    <header>
        <h2>{title}</h2>
        {icon}
    </header>
  )
}

export default PageTitle