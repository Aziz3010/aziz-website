import React from 'react';
import Styles from './Dashboard.module.css';
import PageTitle from '../../Components/PageTitle/PageTitle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const Dashboard = () => {
  return (
    <main className={Styles.main}>
      <PageTitle title="Dashboard" icon={<DashboardCustomizeIcon />} />

      <form action="" encType="multipart/form-data" className={`${Styles.form}`}>
        <input type="text" placeholder=' Name' id='Name' className='form-control mb-3' />
        <input type="text" placeholder=' Link' id='Link' className='form-control mb-3' />
        <select className="form-select mb-3">
          <option>Select technology</option>
          <option value="Frontend">Frontend</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React.Js">React.Js</option>
          <option value="Vue.Js">Vue.Js</option>
          <option value="Backend">Backend</option>
        </select>
        <div className="mb-4">
          <input className="form-control" type="file" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>

    </main>
  )
}

export default Dashboard;
// Here are add, delete, and update projects. [Form -> GRUD]