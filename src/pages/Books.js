import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/book.css'
const Books = () => {
  return (
    <div className='bookpg'>
      <h1>books</h1>
      <h3>Welcome to the Online Library Management System</h3>
      <h3>Discover, Borrow, and Access Books and Digital Resources Effortlessly</h3>
      <div>
        <Link to={'/booklist'}>
        <button className='bbtn'>booklist</button>
        </Link>
        <Link to={'/viewborrowbook'}>
        <button className='bbtn'>viewBorrowedbook</button>
        </Link>
      </div>
    </div>
  )
}

export default Books
