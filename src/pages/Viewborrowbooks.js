import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/view.css';

const Viewborrowbook = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:4000/viewborrowedbook')
            .then((res) => {
                setBorrowedBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    const returnBook = (id) => {
        axios.delete(`http://localhost:4000/returnbook/${id}`)
            .then((res) => {
                console.log(res.data);
                const updatedBorrowedBooks = borrowedBooks.filter(book => book._id !== id);
                setBorrowedBooks(updatedBorrowedBooks);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div>
            <div className='container'>
                <div className='borrowedbooks'>
                    <table className='tdata'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {borrowedBooks.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.booktitle}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <button onClick={() => returnBook(book._id)}>Return</button>
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

export default Viewborrowbook;
