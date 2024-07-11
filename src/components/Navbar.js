import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-items'>
          <div className='nav'>
            <Link to='/login' className='nav-item'>
              Login
            </Link>
            <Link to='/signup' className='nav-item'>
              Signup
            </Link>
            <Link to='/admin' className='nav-item'>
              admin
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
