import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signin.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { email, password }); // Check what is being submitted
    axios.post('http://localhost:4000/admin', {
      email,
      password
    })
    .then(res => {
      console.log('Response:', res.data); // Log response from server
      alert("Logged in successfully");
      navigate('/Adminview')
    })
    .catch(err => {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    });
  }
  

  return (
    <div>
      <div className='form'>
        <form className='form-class' onSubmit={handleSubmit}>
          <div className='form-cont'>
            <div className='form-item'>
              <label htmlFor='email'>Email:</label>
              <input 
                type='email' 
                name='email' 
                id='email' 
                className='in-item' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password:</label>
              <input 
                type='password' 
                name='password' 
                id='password' 
                className='in-item' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button className='button' type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin;
