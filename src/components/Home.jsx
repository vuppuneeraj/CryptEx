import React, { useRef, useEffect } from "react";
import "./styles.css"; 
import backvideo from "../assets/background.mp4";
function Home() {

  const videoRef = useRef(null);
  
    useEffect(() => {
      videoRef.current.play();
    }, []);  
    return (
      <div className="video-background">
        <video ref={videoRef} autoPlay muted loop>
          <source src={backvideo} type="video/mp4"/>
        </video>
        <div className="video-overlay">
          <h1 className="mytitle">CryptEx</h1>
        </div>
      </div>
  );
};

export default Home;