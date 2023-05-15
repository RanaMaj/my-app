import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='top-footer'>
          <div className='logo'>
            <img src='' alt='Logo' />
          </div>

          <div>
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
          </div>
        </div>
        <div>
          <p>&copy; 2023 all rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
