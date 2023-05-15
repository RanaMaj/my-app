import React from "react";
import { Button, ButtonBotstrap } from "../../components/Btn";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header";
import "./style.css";

const HomePage = () => {
  return (
    <React.Fragment className='home_test'>
      {/* ===  ButtonBotstrap === */}
      <Header />

      {/* ===  Content === */}
      <div className='home-page'>
        <h1>Home Page </h1>
        <p>This is the home page and this is text</p>
      </div>

      {/* ===  Button Components === */}
      <Button color={"pink pill"} text={"< back"} />
      <Button color={"outline"} text={"Button"} />
      <Button text={"Bootstrap"} type={"submit"} />
      <Button color={"pink"} text={"Testing btn"} type={"submit"} />

      {/* ===  ButtonBotstrap Components with classes  === */}
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

      {/* ===  Footer === */}
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
