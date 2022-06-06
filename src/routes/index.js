
import { Routes, Route } from 'react-router-dom'
import {Home, Login} from '../views/index'
import {Navbar} from '../components/index'

const AllRoutes = () => {
  return (
    <div>
    {/*  NavBar  */}
    <Navbar/>
    {/* Routes */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
    );
}
 
export default AllRoutes;