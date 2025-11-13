import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <UserNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserDashboard