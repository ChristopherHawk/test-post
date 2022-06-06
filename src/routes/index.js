
import React, {useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import {Home, Login} from '../views/index'
import {Navbar} from '../components/index'

const AllRoutes = () => {

  const goTo = useNavigate()

  useEffect(() => {
   if(!localStorage.getItem('access_token')){
    goTo('/login')
   }
  }, [])
  
  return (
    <div>
    {/*  NavBar  */}
    <Navbar/>
    {/* Routes */}
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
    );
}
 
export default AllRoutes;