import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const UserNavbar = () => {
  return (
    <div className='navbar'>
        <h2>Welcome User</h2>
      <Link to="/user">Home</Link> | 
      <Link to="/user/cart">View Cart</Link> | 
      <Link to="/user/order">View Orders</Link> | 
      <Link to="/user/profile">Profile</Link> | 
      <Link to="/user/logout">Logout</Link> |
    </div>
  )
}

export default UserNavbar