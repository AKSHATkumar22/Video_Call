import React, { useState } from "react";
import mainImage from "../assets/illustration-Azuc-YCm.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  function handleJoin() {
    navigate(`/room/${input}`);
  }

  return (
    <div className="container">
      <div className="left">
        <img src={mainImage} alt="" />
      </div>
      <div className="right">
        <h1>
          <span className="white">Video</span>
          <span className="green">Karo</span>
        </h1>
        <p className="subtitle">Video Call && Chat karo Na..!!</p>
        <input
          type="text"
          placeholder="Enter your Room ID"
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="join-btn" onClick={handleJoin}>
          Join Now
        </button>
        <p className="copy">
          <a href="https://www.linkedin.com/in/akshat-kumar-96a033224">
            @Akshat_Kumar : 2025
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
