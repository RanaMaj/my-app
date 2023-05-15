import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className='home-page'>
        <h1>About Page </h1>
        <p>This is the About page and this is text</p>

        <ul>
          <li>
            <a href='../Home/index.jsx'>Home</a>
          </li>
          <li>
            <a href='../Work/index.jsx'>Work</a>
          </li>
          <li>
            <a href='../Contact/index.jsx'>Contact</a>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
