import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <img src='' alt='Logo' />
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/work'>Work</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
