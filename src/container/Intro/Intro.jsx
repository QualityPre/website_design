import "./Intro.css";
import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={videoRef}
        controls={false}
        loop
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
