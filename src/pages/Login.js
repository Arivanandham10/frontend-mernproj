import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import '../styles/signin.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', {
      email,
      password
    })
    .then(res => {
        console.log(res.data)
        alert("logged in successfully");
        navigate('/book')

    })
    .catch(err => {
      console.log("invalid credentials");
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
            <button className='button'>Sign In</button>
            <div className='login'>
              <p>Don't have an account yet? <Link to='/signup' className='loglink'>Click here to sign up</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
