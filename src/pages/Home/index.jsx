import { Button, ButtonBotstrap } from "../../components/Btn";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import "./style.css";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className='home-page'>
        <h1>Home Page </h1>
        <p>This is the home page and this is text</p>

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
      <Button color={"pink pill"} text={"< back"} />
      <Button color={"outline"} text={"Button"} />
      <Button text={"Bootstrap"} type={"submit"} />

      {/* <button className={(color, `"btn" btn-${btnType}`)} type={type}>
        {text} */}

      <Button color={"pink"} text={"Testing btn"} type={"submit"} />
      <ButtonBotstrap
        btnTypeBootstrap='outline-success'
        text='Waring'
        type={"submit"}
      />
      <ButtonBotstrap
        btnTypeBootstrap='success'
        text='Waring'
        type={"submit"}
      />
      <Footer />
    </>
  );
};

export default HomePage;
