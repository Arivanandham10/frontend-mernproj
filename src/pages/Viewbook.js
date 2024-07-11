import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/view.css';

const Viewbook = () => {
    const [books, setBooks] = useState([]);
    const [filtered, setFiltered] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:4000/viewbook')
            .then((res) => {
                setBooks(res.data);
                setFiltered(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    const deleteBook = (id) => {
        axios.delete(`http://localhost:4000/deletebook/${id}`)
            .then((res) => {
                console.log(res.data);
                const updatedBooks = books.filter(book => book._id !== id);
                setBooks(updatedBooks);
                setFiltered(updatedBooks);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    const searchBook = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredBooks = books.filter((book) => {
            return book.booktitle.toLowerCase().includes(search);
        });
        setFiltered(filteredBooks);
    };
    
    return (
        <div>
            <div className='container'>
                <div className='searchbook'>
                    <input 
                        type="search" 
                        placeholder='Search Book' 
                        className='Sbook' 
                        onChange={searchBook} 
                    />
                    <button className='sbtn'>Search</button>
                </div>
                <div className='booklist'>
                    <table className='tdata'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Year</th>
                                <th>Read Online</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.booktitle}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.year}</td>
                                    <td>
                                        <a href={book.url} target="_blank" rel="noopener noreferrer">
                                            <button className='rbtn'>Read</button>
                                        </a>
                                    </td>
                                    <td>
                                        <Link to={`/updatebook/${book._id}`}>
                                            <button className='ubtn'>Update</button>
                                        </Link>
                                        <button className='dbtn' onClick={() => deleteBook(book._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Viewbook;
