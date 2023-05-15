import React from "react";
import "./style.css";

const Button = ({ type, text, color }) => {
  return (
    <button className={color} type={type}>
      {text}
    </button>
  );
};

const ButtonBotstrap = ({ btnTypeBootstrap, type, text }) => {
  return (
    <button className={`"btn" btn-${btnTypeBootstrap}`} type={type}>
      {text}
    </button>
  );
};

export { Button, ButtonBotstrap };
