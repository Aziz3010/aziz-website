import React, { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SubTilte from '../../Components/SubTilte/SubTilte';
import Styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && email !== '' && message !== '') {
      const client = {
        clientName : name,
        clientEmail : email,
        clientMessage : message,
      };
      console.log(client);
      setSent(true);
      // send client{} to db by api or to php-mail
    } else {
      setError(true);
    }
  }

  return (
    <main className={Styles.main}>
      <PageTitle title="Contact" icon={<ConnectWithoutContactIcon />} />
      <SubTilte SubTilte="Let's Talk" />
      <form onSubmit={ (e) => handleSubmit(e) }>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Name">Your Name</label>
            <input
              onChange={ (e) => setName(e.target.value)}
              required={true}
              name='name'
              type="text"
              className="form-control"
              id="Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Email">Your Email</label>
            <input
              onChange={ (e) => setEmail(e.target.value)}
              required={true}
              name='email'
              type="email"
              className="form-control"
              id="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Message">Your Message...</label>
          <textarea
            onChange={ (e) => setMessage(e.target.value)}
            required={true}
            name="message"
            className={`${Styles.textarea} form-control`}
            rows='8'
            id="Message"
          >
          </textarea>
        </div>
        { error && <p className="alert alert-danger mb-3 p-0 text-center w-25 " role="alert">All fields are required!</p> }
        { sent && <p className="alert alert-success mb-3 p-0 text-center w-25 " role="alert">Successfuly send.</p> }
        <button type="submit" className="btn btn-primary px-4">Send</button>
      </form>
    </main>
  )
}

export default Contact