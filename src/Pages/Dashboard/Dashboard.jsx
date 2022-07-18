import React, { useEffect, useState } from 'react';
import Styles from './Dashboard.module.css';
import PageTitle from '../../Components/PageTitle/PageTitle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [technology, setTechnology] = useState('');
  const [imageName, setImageName] = useState('');

  const token = localStorage.getItem('AzizSiteToken');

  let formData = {
    project_name: name,
    project_link: link,
    technology: technology,
    imageName: imageName
  }

  const callAPIToPost = async () => {
    // const resp = await axios.post(`http://localhost/myProjectsAPI/postProjects.php`, formData);
    const resp = await axios.post(`${process.env.REACT_APP_API_HOST}/postProjects.php`, formData);
    console.log(resp.data);
  }

  useEffect(() => {
    if (!token) {
      window.location.replace('/login');
    }
  })

  const logoutHandler = () => {
    localStorage.removeItem('AzizSiteToken');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    callAPIToPost();
  }

  return (
    <main className={Styles.main}>
      <PageTitle title="Dashboard" icon={<DashboardCustomizeIcon />} />

      <form onSubmit={submitHandler} encType="multipart/form-data" className={`${Styles.form}`}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='form-control mb-3' />

        <input onChange={(e) => setLink(e.target.value)} type="text" placeholder='Link' className='form-control mb-3' />

        <select onChange={(e) => setTechnology(e.target.value)} className="form-select mb-3">
          <option>Select technology</option>
          <option value="Frontend">Frontend</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React.Js">React.Js</option>
          <option value="Vue.Js">Vue.Js</option>
          <option value="Backend">Backend</option>
        </select>

        <div className="mb-4">
          <input onChange={(e) => setImageName(e.target.value)} className="form-control" type="file" />
        </div>

        <div className="btns d-flex align-items-center gap-5">
          <button type="submit" className="btn btn-primary w-50">Save</button>
          <Link to='/login' onClick={logoutHandler} className="btn btn-danger w-50">Logout</Link>
        </div>

      </form>
    </main>
  )
}

export default Dashboard;