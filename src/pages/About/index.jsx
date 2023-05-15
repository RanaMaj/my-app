import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className='about-page'>
        <h1>About Page </h1>
        <p>This is the About page and this is text</p>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
