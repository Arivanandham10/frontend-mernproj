import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
const Main = (props) => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <main style={{ minHeight: '80vh'}}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Main;
