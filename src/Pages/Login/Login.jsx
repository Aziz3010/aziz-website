import React, { useState } from 'react';
import Styles from './Login.module.css';
import LoginIcon from '@mui/icons-material/Login';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMSG, setErrorMSG] = useState('Something is wrong');
    
    const callAPI = async () => {
        // const request = await fetch(`http://localhost/myProjectsAPI/index.php?email=${email}&password=${password}`);
        const request = await fetch(`http://myapi.rf.gd/index.php?email=${email}&password=${password}`);
        const respone = await request.json();
        if(respone.msg === 'Allow') {
            window.location.replace('/login:dashboard');
            setError(false);
        } else {
            setErrorMSG(respone.msg);
            setError(true);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(email.length === 0 && password.length === 0) {
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
                    error && <p className='alert alert-danger py-0 text-center'>{errorMSG}</p>
                }
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='form-control mb-4' />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='form-control mb-5' />
                <button type="submit" className="btn btn-primary w-100">Sign in</button>
            </form>
        </main>
    )
}

export default Login;