import React from "react";
import "./header.css";

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
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/work'>Work</a>
            </li>
            <li>
              <a href='contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
