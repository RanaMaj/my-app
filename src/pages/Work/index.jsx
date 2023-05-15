import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import "./style.css";
const WorkPage = () => {
  return (
    <>
      <Header />
      <div className='work-page'>
        <h1>Work Page </h1>
        <p>This is the work page and this is text</p>

        <ul>
          <li>
            <a href='{../About/index.jsx}'>About</a>
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

export default WorkPage;
