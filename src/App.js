import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Main from './components/Main';
import Admin from './pages/Admin';
import Viewusers from './pages/Viewusers';
import UpdateUser from './pages/UpdateUser';
import AdminView from './pages/AdminView';
import Home from './pages/Home';
import Books from './pages/Books';
import Addbooks from './pages/Addbooks';
import Viewbook from './pages/Viewbook';
import Updatebook from './pages/Updatebook';
import Booklist from './pages/Booklist';
import Borrowbook from './pages/Borrowbook';
import Viewborrowbook from './pages/Viewborrowbooks';

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/viewuser/:id" element={<Viewusers />} />
          <Route path="/viewuser" element={<Viewusers />} />
          <Route path="/book" element={<Books />} />
          <Route path="/updateuser/:id" element={<UpdateUser />} />
          <Route path="/adminview" element={<AdminView />} />
          <Route path="/addbook" element={<Addbooks />} />
          <Route path="/viewbook" element={<Viewbook />} />
          <Route path="/updatebook/:id" element={<Updatebook />} />
          <Route path='/booklist' element={<Booklist/>} />
          <Route path='/borrowbook/:id' element={<Borrowbook/>} />
          <Route path='/viewborrowbook' element={<Viewborrowbook/>} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
