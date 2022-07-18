import React, { useState } from 'react';
import Styles from './Login.module.css';
import LoginIcon from '@mui/icons-material/Login';
import PageTitle from '../../Components/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('a.abdelazizg@gmail.com');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMSG, setErrorMSG] = useState('Something is wrong');

    const callAPI = async () => {
        // local host
        // "proxy": "http://myapi.rf.gd",
        const { data } = await axios.get(`http://myapi.rf.gd/index.php?email=${email}&password=${password}`);
        // "proxy": "http://localhost/myProjectsAPI",
        // const { data } = await axios.get(`/index.php?email=${email}&password=${password}`);
        console.log(data);

        if (data.msg === 'Allow') {
            let Number = Math.random() * 1000000;
            let string = email + "Allow" + password + email + Number + email + password;
            let token = string + Number;
            let encoded = window.btoa(token);
            localStorage.setItem('AzizSiteToken', encoded);
            window.location.replace('/dashboard');
            setError(false);
        } else {
            localStorage.removeItem('AzizSiteToken');
            setErrorMSG(data.msg);
            setError(true);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (email.length === 0 && password.length === 0) {
            setError(true);
        } else {
            setError(false);
            callAPI();
        }
    }

    return (
        <main className={Styles.main}>
            <PageTitle title="Login" icon={<LoginIcon />} />

            <form onSubmit={submitHandler} className={`${Styles.form}`}>
                {
                    error && <p className='alert py-0 text-center alert-danger'>{errorMSG}</p>
                }
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='form-control mb-4' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='form-control mb-5' />
                <button type="submit" className="btn btn-primary w-100">Log in</button>
            </form>
        </main>
    )
}

export default Login;