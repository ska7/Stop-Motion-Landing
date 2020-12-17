import * as React from "react";
import Calls from "./Calls";
import Guides from "./Guides";
import PaymentForm from "./PaymentForm";

export interface IPriceCardProps {
  cardName: string;
  firstPrice: string;
  secondPrice: string;
  thirdPrice: string;
  features: any[];
  id: number;
  calls: string[];
  guides: string[];
  timerOff?: boolean;
}

const PriceCard: React.FC<IPriceCardProps> = ({
  cardName,
  firstPrice,
  secondPrice,
  features,
  id,
  calls,
  guides,
  timerOff,
}) => {
  return (
    <div style={center}>
      <>
        <div id={`price-card${id}`} className="price-card">
          <div style={center}>
            <div className="prices-block">
              {secondPrice && <h3 style={priceStyle}>{secondPrice}₽</h3>}
              <h1 style={h1Style}>{firstPrice}₽</h1>
              {cardName && <h2 style={mentorStyle}>{cardName}</h2>}
            </div>
            <ul>
              {features.map((item, i) => {
                return <li key={i}> ❧&nbsp;{item}</li>;
              })}
            </ul>
            {calls && (
              // if calls provided, map through them
              <Calls calls={calls} h3Style={h3Style} />
            )}
            {guides && (
              // if guides are provided, map through them
              <Guides guides={guides} h3Style={h3Style} centerStyle={center} />
            )}
          </div>
        </div>
      </>
      <PaymentForm price={firstPrice} />
    </div>
  );
};

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
  margin: "20px 0",
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
const mentorStyle = ({
  background: "purple",
  width: "100%",
  padding: "20px 0",
  color: "rgb(255, 193, 7)",
  textAlign: "center",
  fontWeight: "800",
  marginBottom: "0",
  fontSize: "20px",
} as unknown) as React.CSSProperties;

const center = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;

export default PriceCard;
