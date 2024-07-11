import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/signin.css'
const Borrowbook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    booktitle: '',
    author: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/viewbook/${id}`)
      .then((res) => {
        const bookData = res.data;
        setBook({
          booktitle: bookData.booktitle || '',
          author: bookData.author || ''
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Borrowing book:', book);

    axios.post('http://localhost:4000/borrowbook', {
      booktitle: book.booktitle,
      author: book.author
    })
    .then(res => {
      alert("Book borrowed successfully");
      navigate('/book');
    })
    .catch(err => {
      console.error('Error borrowing book:', err.response ? err.response.data : err);
    });
  };

  return (
    <div className='maincont'>
        <div className='form'>
        <form className='form-class' onSubmit={handleSubmit}>
            <div className='form-cont'>
                <div className='form-item'>
                    <label>Book Title:</label>
                    <input type="text" value={book.booktitle} className='in-item' readOnly />
                </div>
                <div className='form-item'>
                    <label>Author:</label>
                    <input type="text" value={book.author} className='in-item' readOnly />
                </div>
                <button className='button' type="submit">Borrow Book</button>
            </div>
        </form>
        </div>
    </div>
  );
}

export default Borrowbook;
