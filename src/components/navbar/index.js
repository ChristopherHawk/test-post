import React from 'react';
import './index.css'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <div>
        <p>Pepe perez
          <br />
          en línea
        </p>
      </div>
      <div>
        <input type='search' />
      </div>

    </nav>
  );
}

export default Navbar;