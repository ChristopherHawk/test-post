import React from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css'

const Navbar = () => {

 const userName =  localStorage.getItem('name_user')
 const userEmail = localStorage.getItem('email_user')
 const goTo = useNavigate()

 return (
    <nav className='nav-bar'>
      <div className='user-info'>
        <p>{userName}
          <br />
          {userEmail}
        </p>
      </div>
      <div>
        <button className='btn-logout' onClick={() =>  {localStorage.clear();  goTo('/login')}}>Desconectar</button>
      </div>

    </nav>
  );
}

export default Navbar;