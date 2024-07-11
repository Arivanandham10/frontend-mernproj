import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div>
      <div>
        <div className='footer'>
          <div className='foot-cont'>
            <div className='foot-sec'>
              <h3>About Us</h3>
              <p>We aim to provide an extensive range of books and digital resources to cater to all your reading needs. Our mission is to make library management efficient and accessible for everyone.</p>
            </div>
            <div className='foot-sec'>
              <h3>Contact Us</h3>
              <p>Email: info@onlinelibrary.com</p>
              <p>Phone: +123-456-7890</p>
              <p>Address: 123 Main St, Anytown, CA 12345</p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>&copy; 2024 Online Library Management System | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
