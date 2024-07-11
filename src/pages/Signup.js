import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/signup', {
      name,
      email,
      phoneno,
      password
    })
    .then(res => {
      alert("Registration completed");
      navigate('/login')
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <div className='form'>
        <form className='form-class' onSubmit={handleSubmit}>
          <div className='form-cont'>
            <div className='form-item'>
              <label htmlFor='name'>Name:</label>
              <input 
                type='text' 
                name='name' 
                id='name' 
                className='in-item' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
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
              <label htmlFor='phoneno'>Phoneno:</label>
              <input 
                type='number' 
                name='Phoneno' 
                id='Phoneno' 
                className='in-item' 
                value={phoneno} 
                onChange={(e) => setPhoneno(e.target.value)} 
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
            <button className='button' type='submit'>Sign Up</button>
            <div className='login'>
              <p>Already have an account? <Link to='/login' className='loglink'>Click here to log in</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
