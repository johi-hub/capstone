import React from "react";
import StruggleBot from "../card-one/StruggleBot";
import DisplayPage from "../card-two/DisplayPage";
import ChatBox from "../card-three/ChatBox";

function Homepage({ handleWisdom, handleMeme, wisdom, meme }) {
  return (
    <>
      <StruggleBot handleWisdom={handleWisdom} handleMeme={handleMeme} />
      <DisplayPage wisdom={wisdom} meme={meme} />
      <ChatBox />
    </>
  );
}

export default Homepage;
