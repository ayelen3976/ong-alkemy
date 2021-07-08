import React from "react";
import "./card.css";

function Card({ imgSrc, title, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Card;
