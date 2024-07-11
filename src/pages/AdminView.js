import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/admin.css'
const AdminView = () => {
  return (
    <div>
      <h2 className='adm'>Welcome Admin</h2>
      <Link to="/viewuser">
      <button className='vbtn'>View user</button>
      </Link>
      <Link to="/addbook">
      <button className='vbtn'>Add book</button>
      </Link>
      <Link to="/viewbook">
      <button className='vbtn'>View book</button>
      </Link>
    </div>
  )
}

export default AdminView
