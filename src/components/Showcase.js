import React from "react";
import "../styles/Showcase.css";
import showcase from "../img/image-hero-desktop.png";

function Showcase() {
  return (
    <div className="showcase-container">
      <div className="text-container">
        <h2>Make </h2>
        <h2>remote work</h2>
        <p>Get yout team in sync, no matter your location.</p>
        <p>Streamline processes, create team rituals, and</p>

        <p>watch productivity soar.</p>

        <button>Learn More</button>
      </div>
      <div className="image-container">
        <img className="desktop" src={showcase} alt=""></img>
      </div>
    </div>
  );
}

export default Showcase;
