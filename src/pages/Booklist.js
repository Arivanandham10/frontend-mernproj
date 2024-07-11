import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/view.css';

const Booklist = () => {
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
                        className='Suser' 
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
                                    <Link to={`/borrowbook/${book._id}`}>
                                        <button className='ubtn'>Borrow</button>
                                    </Link>
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

export default Booklist;
