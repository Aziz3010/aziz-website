import React, { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ProjectComponent from '../../Components/Project/Project';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Styles from './Portfolio.module.css';
import ProjectsAPI from '../../Projects.js';

const Portfolio = () => {
  const [ projects, setProjects ] = useState(ProjectsAPI);
  const projectsCount = projects.length;
  
  const handleTabs = (e) => {
    e.preventDefault();
    const allTabs = document.querySelectorAll('.nav-link');
    allTabs.forEach((element)=>{
      element.classList.remove('active');
    })
    e.target.classList.add('active');
    const tabValue = e.target.innerText;
    const filteredProjects = tabValue === 'All' ? ProjectsAPI : ProjectsAPI.filter( proj => ( proj.technology === tabValue && proj ) );
    setProjects(filteredProjects);
  }

  return (
    <main className={Styles.main}>
      <PageTitle title="Portfolio" icon={ <BusinessCenterIcon /> } />
      {/* Tabs */}
      <ul className="nav nav-pills nav-fill">

        <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link active" rel="noreferrer" href="/">All</a>
        </li>

        <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link" rel="noreferrer" href="/">Frontend</a>
        </li>

        {/* <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link" rel="noreferrer" href="/">JavaScript</a>
        </li> */}

        <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link" rel="noreferrer" href="/">React.Js</a>
        </li>

        {/* <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link" rel="noreferrer" href="/">Vue.Js</a>
        </li> */}

        <li className="nav-item m-1" onClick={ (e) => handleTabs(e) }>
          <a className="nav-link"  rel="noreferrer" href="/">Backend</a>
        </li>
      
      </ul>
      {/* Projects Numeber */}
      <div className='d-flex justify-content-center align-items-center mt-3 mb-4'>
        <span className="badge bg-primary">{projectsCount}</span>Projects     
      </div>
      
      {/* Mapping on Projects */}
      <div className="container">
        <div className="row">
          {projects.map((Project, index) => <ProjectComponent data={Project} key={index} /> )}
        </div>
      </div>

    </main>
  )
}

export default Portfolio