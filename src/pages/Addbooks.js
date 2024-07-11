import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import axios from 'axios';

const Addbooks = () => {
  const [booktitle, setBooktitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [url, setUrl] = useState('')
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/addbook', {
      booktitle,
      author,
      genre,
      year,
      url
    })
    .then(res => {
      alert("Book added successfully");
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
              <label htmlFor='booktitle'>Book Title:</label>
              <input 
                type='text' 
                name='booktitle' 
                id='booktitle' 
                className='in-item' 
                value={booktitle} 
                onChange={(e) => setBooktitle(e.target.value)} 
              />
            </div>
            <div className='form-item'>
              <label htmlFor='author'>Author:</label>
              <input 
                type='text' 
                name='author' 
                id='author' 
                className='in-item' 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
              />
            </div>
            <div className='form-item'>
              <label htmlFor='genre'>Genre:</label>
              <input 
                type='text' 
                name='genre' 
                id='genre' 
                className='in-item' 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
              />
            </div>
            <div className='form-item'>
              <label htmlFor='year'>Year:</label>
              <input 
                type='number' 
                name='year' 
                id='year' 
                className='in-item' 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
              />
            </div>
            <div className='form-item'>
              <label htmlFor='year'>URL:</label>
              <input 
                type='text' 
                name='year' 
                id='year' 
                className='in-item'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button className='button' type='submit'>Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addbooks;
