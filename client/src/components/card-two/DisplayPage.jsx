import React from "react";

function DisplayPage({ wisdom, meme }) {
  return (
    <>
      <div className="container">
        <div className="wisdomText_container">
          <h1 className="wisdomText">{wisdom[0]?.q}</h1>
        </div>
        <img
          className="memeimg"
          src={
            meme?.data?.memes[
              Math.floor(Math.random() * meme?.data?.memes.length)
            ].url
          }
        />
      </div>
    </>
  );
}

export default DisplayPage;
