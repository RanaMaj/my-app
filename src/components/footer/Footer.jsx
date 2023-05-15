import React from "react";
import "./footer.css";
import { IconBxlInstagram, IconBxlTwitter, IconBxlYoutube } from "../icon";

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
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/work'>Work</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
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
