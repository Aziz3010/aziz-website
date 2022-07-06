import React from 'react';
import Styles from './Login.module.css';
import LoginIcon from '@mui/icons-material/Login';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Dashboard from '../Dashboard/Dashboard';

const Login = () => {
    return (
        <main className={Styles.main}>
            <PageTitle title="Login" icon={<LoginIcon />} />

            <form action="" className={`${Styles.form}`}>
                <input type="email" placeholder='Email' id='Email' className='form-control mb-4' />
                <input type="password" placeholder='Password' id='Password' className='form-control mb-5' />
                <button type="submit" className="btn btn-primary w-100">Sign in</button>
            </form>

            <Dashboard />
            
        </main>
    )
}

export default Login;