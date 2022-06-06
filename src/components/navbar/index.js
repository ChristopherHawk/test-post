import React from 'react';
import './index.css'

const Navbar = () => {

 const userName =  localStorage.getItem('name_user')
 const userEmail = localStorage.getItem('email_user')
 
 return (
    <nav className='nav-bar'>
      <div>
        <p>{userName}
          <br />
          {userEmail}
        </p>
      </div>
      <div>
        <button onClick={() =>  localStorage.setItem('access_token', '')}>Desconectar</button>
      </div>

    </nav>
  );
}

export default Navbar;