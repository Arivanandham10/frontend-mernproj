import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/view.css';

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${id}`)
      .then((res) => {
        const user = res.data;
        setName(user.name);
        setEmail(user.email);
        setPhoneno(user.phoneno);
      })
      .catch((err) => {
        console.error('Error fetching user details:', err);
        if (err.response && err.response.status === 404) {
          alert('User not found');
          navigate('/viewuser');
        }
      });
  }, [id, navigate]);

const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/updateuser/${id}`, { name, email, phoneno })
      .then((res) => {
        console.log('User updated successfully:', res.data);
        navigate('/viewuser');
      })
      .catch((err) => {
        console.error('Error updating user:', err);
        if (err.response && err.response.status === 404) {
          alert('User not found');
          navigate('/viewuser');
        }
      });
};


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
              <label htmlFor='phoneno'>Phone Number:</label>
              <input 
                type='text' 
                name='phoneno' 
                id='phoneno' 
                className='in-item' 
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </div>
            <button className='button' type='submit'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
