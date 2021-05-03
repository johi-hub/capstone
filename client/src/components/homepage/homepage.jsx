import React from "react";
import StruggleBot from "../card-one/StruggleBot";
import DisplayPage from "../card-two/DisplayPage";
import ChatBox from "../card-three/ChatBox";

function Homepage({
  handleWisdom,
  handleMeme,
  wisdom,
  meme,
  handleRecepie,
  recepie,
}) {
  return (
    <>
      <StruggleBot
        handleWisdom={handleWisdom}
        handleMeme={handleMeme}
        handleRecepie={handleRecepie}
      />
      <DisplayPage wisdom={wisdom} meme={meme} recepie={recepie} />
      <ChatBox />
    </>
  );
}

export default Homepage;
