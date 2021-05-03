import React from "react";

function DisplayPage({ wisdom, meme, recepie }) {
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
        <img
          className="recepeimg"
          src={
            recepie?.data?.recepies[
              Math.floor(Math.random() * recepie?.data?.recepies.length)
            ].url
          }
        />
      </div>
    </>
  );
}

export default DisplayPage;
