import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import "./style.css";
const ContactPage = () => {
  return (
    <>
      <Header />
      <div className='contact-page'>
        <h1>Contact Page </h1>
        <p>This is the home page and this is text</p>

        <ul>
          <li>
            <a href='../Home/index.jsx'>Home</a>
          </li>
          <li>
            <a href='../About/index.jsx'>About</a>
          </li>
          <li>
            <a href='../Work/index.jsx'>Work</a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
