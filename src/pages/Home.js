import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='maincon'>
        <h1>Welcome to the Online Library Management System</h1>
        <h2>Discover, Borrow, and Access Books and Digital Resources Effortlessly</h2>
        <p>Welcome to our Online Library Management System, a comprehensive platform<br/>
          designed to digitize library operations and enhance your reading experience.<br/>
          Whether you're a book lover, a student, or a researcher, our system provides <br/>
          easy access to a wide range of books and digital resources.</p>
        <h3>Get Started Today!</h3>
        <p>Join our community of readers and take advantage of our digitized library services. <br/>
          Start your journey to discover, borrow, and enjoy books and digital resources like never before.</p>
          <Link to={'/login'}>
          <button className='jbtn'>Get Started</button>
          </Link>
      </div>
    </div>
  )
}

export default Home
