import React from "react";

export default function ExpertCard({ picture, rank, name, bio }) {
  return (
    <div className="expert-card" data-aos="flip-up">
      <img src={picture}></img>
      <div className="expert-card-info">
        <h2>{name}</h2>
        <h3>{rank}</h3>
        {bio.map((item) => {
          return <p>◌&nbsp;&nbsp;{`${item}`}</p>;
        })}
      </div>
    </div>
  );
}
