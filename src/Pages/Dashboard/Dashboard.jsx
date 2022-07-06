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
        <select className="custom-select mb-3">
          <option defaultValue>Select technology</option>
          <option value="Frontend">Frontend</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React.Js">React.Js</option>
          <option value="Vue.Js">Vue.Js</option>
          <option value="Backend">Backend</option>
        </select>
        <div className="custom-file mb-5">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile">Project Image</label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>

    </main>
  )
}

export default Dashboard;
// Here are add, delete, and update projects. [Form -> GRUD]