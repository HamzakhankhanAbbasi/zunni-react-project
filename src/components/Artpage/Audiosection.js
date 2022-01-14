import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./Audioplayersect";

function Audiosect({ trackLink }) {
  const style = {
    h1: {
      fontSize: "14px"
    },
    center: {
      display: "grid",
      justifyContent: "center",
      textAlign: "center"
    }
  };
  return (
    <>
      <div className="user_audio" style={style.center}>
        <AudioPlayer trackLink="https://www.free-stock-music.com/music/jay-someday-family-business.mp3" />
        <br />
      </div>
    </>
  );
}

export default Audiosect;