import React, { useEffect } from "react";

export default function PriceCard({
  firstPrice,
  secondPrice,
  thirdPrice,
  features,
  mentor,
  id,
  individual,
}) {
  const priceStyle = {
    textDecoration: "line-through",
    padding: "10px",
    marginTop: "5px",
  };
  const h1Style = {
    background: "rgb(255, 193, 7)",
    borderRadius: "15px",
    color: "black",
    marginBottom: "20px",
    width: "auto",
  };
  const mentorStyle = {
    background: "purple",
    width: "100%",
    height: "auto",
    color: "rgb(255, 193, 7)",
    textAlign: "center",
    fontWeight: "800",
    marginBottom: "0",
    padding: "10px",
    fontSize: "20px",
  };

  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={`price-card price-card${id}`}>
      <div style={center}>
        <div className="prices-block">
          {individual ? (
            <React.Fragment>
              <h1>{firstPrice}</h1>
              <h2 style={mentorStyle}>ИНДИВИДУАЛЬНАЯ РАБОТА</h2>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h3 style={priceStyle}>{thirdPrice}</h3>
              <h2 style={priceStyle}>{secondPrice}</h2>
              <h1 style={h1Style}>{firstPrice}</h1>
            </React.Fragment>
          )}
          {mentor && <h2 style={mentorStyle}>МЕНТОРСТВО</h2>}
        </div>
        <ul>
          {features.map((item, i) => {
            return <li key={i}> ❧&nbsp;{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
