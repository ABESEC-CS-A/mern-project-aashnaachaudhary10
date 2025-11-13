import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<h1>About Page</h1>}/>
        <Route path="contact" element={<h1>Contact Page</h1>}/>
        <Route path="register" element={<h1>Register Here</h1>}/>
        <Route path="login" element={<h1>Login here</h1>}/>
        </Route>
        <Route path="/user" element={<UserDashboard/>}>
        <Route index element={<h1>Shopping Items</h1>}/>
        <Route path="cart" element={<h1>My Cart</h1>}/>
        <Route path="order" element={<h1>View orders</h1>}/>
        <Route path="profile" element={<h1>Profile Page</h1>}/>
        <Route path="logout" element={<h1>Logout Page</h1>}/>
        </Route>
        <Route path="/admin" element={<UserDashboard/>}>
        <Route index element={<h1>Admin Dashboard</h1>}/>
        <Route path="additem" element={<h1>Add Item</h1>}/>
        <Route path="viewitem" element={<h1>View Items</h1>}/>
        <Route path="adduser" element={<h1>Add User</h1>}/>
        <Route path="viewuser" element={<h1>List of users</h1>}/>
        <Route path="logout" element={<h1>Logout Page</h1>}/>
        </Route>
        <Route path="*" element={<h1>404 not found Error Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App