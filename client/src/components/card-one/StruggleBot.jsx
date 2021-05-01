import React, { useState } from "react";
import "./StruggleBot.scss";
import bmo from "../../assets/icons8-bmo.svg";
import axios from "axios";

const StruggleBot = ({ handleWisdom, handleMeme }) => {
  const [botResponse, setBotResponse] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.userInput.value);
    axios
      .post("http://localhost:8080/bot", {
        userInput: e.target.userInput.value,
      })
      .then((res) => {
        setBotResponse(res.data);
      });
  };
  return (
    <div className="container left">
      <div className="top-container">
        <h1 className="title">StruggleBus.io</h1>
        <img className="BMO" src={bmo} alt="bmo" />
        <div className="bmochatbox__container">
          <p className="bmoresponse">{botResponse}</p>
          <form onSubmit={handleSubmit}>
            <input
              name="userInput"
              type="text"
              className="bmochatbox"
              placeholder="What's on your mind?"
            />
          </form>
        </div>
        <div className="button-container">
          <button
            className="resources"
            // onClick={handleResources}
          >
            resources
          </button>
          <button className="wisdom" onClick={handleWisdom}>
            wisdom 🧙
          </button>
          <button className="meme" onClick={handleMeme}>
            meme
          </button>
        </div>
      </div>
    </div>
  );
};

export default StruggleBot;
