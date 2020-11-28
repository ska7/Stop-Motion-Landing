import React from "react";
import PaymentForm from "./PaymentForm";

export default function PriceCard({
  firstPrice,
  secondPrice,
  thirdPrice,
  features,
  mentor,
  id,
  individual,
  secondPart,
  guides,
}) {
  const priceStyle = {
    textDecoration: "line-through",
    padding: "10px",
    marginTop: "5px",
  };
  const h1Style = {
    background: "rgb(255, 193, 7)",
    boxShadow: "0px 0px 10px black",
    borderRadius: "15px",
    color: "black",
    marginBottom: "20px",
    width: "auto",
  };
  const h3Style = {
    textAlign: "center",
    fontSize: "20px",
    borderBottom: "1px solid black",
    borderRadius: "15px",
    padding: "10px",
    width: "70%",
    boxShadow: "0 0 10px black",
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
    <React.Fragment>
      <div id={`price-card${id}`} className={`price-card`}>
        <div style={center}>
          <div className="prices-block">
            {individual ? (
              <React.Fragment>
                <h1>{firstPrice}</h1>
                <h2 style={mentorStyle}>ИНДИВИДУАЛЬНАЯ РАБОТА</h2>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3 style={priceStyle}>{`${thirdPrice}${"₽"}`}</h3>

                <h1 style={h1Style}>{`${secondPrice}${"₽"}`}</h1>
              </React.Fragment>
            )}
            {mentor && <h2 style={mentorStyle}>МЕНТОРСТВО</h2>}
          </div>
          <ul>
            {features.map((item, i) => {
              return <li key={i}> ❧&nbsp;{item}</li>;
            })}
            {mentor && (
              <li>
                ❧&nbsp; две группы по пять человек:{" "}
                <strong>начинающие (с нуля) </strong> — 5 мест,{" "}
                <strong>продолжающие </strong> — 5 мест
              </li>
            )}
          </ul>
          {secondPart && (
            <React.Fragment>
              {" "}
              <h3 style={h3Style}>4 созвона :</h3>
              <ul>
                {secondPart.map((item, i) => {
                  return <li key={i}> ❧&nbsp;{item}</li>;
                })}
              </ul>
            </React.Fragment>
          )}
          <ul style={center}>
            {guides && (
              <React.Fragment>
                <h3 style={h3Style}>3 чек-листа :</h3>
                {guides.map((guide, i) => {
                  return (
                    <li key={i} style={{ fontWeight: "1000" }}>
                      {" "}
                      ❧&nbsp;{guide}
                    </li>
                  );
                })}
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
      <PaymentForm secondPrice={2} />
    </React.Fragment>
  );
}
