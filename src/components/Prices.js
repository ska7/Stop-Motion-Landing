import React, { useEffect } from "react";
import PriceCard from "./PriceCard";
import Timer from "./Timer";
import Carousel from "react-elastic-carousel";

import { firstTarrif, secondTarrif, thirdTarrif } from "./tarrif-features";

export default function Prices() {
  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    border: "1px solid black",
    width: "70%",
  };
  return (
    <div className="prices-section">
      <h1 style={{ marginTop: "35px" }}>Тарифы</h1>
      <Timer />
      <Carousel itemsToShow={1} showArrows={false} style={{}}>
        <div style={center}>
          <PriceCard
            firstPrice={"1290₽"}
            secondPrice={"1690₽"}
            thirdPrice={"1990₽"}
            features={firstTarrif}
            id={1}
          />
          <button
            style={buttonStyle}
            type="button"
            className="join-button btn btn-warning"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"3990₽"}
            secondPrice={"4290₽"}
            thirdPrice={"4590₽"}
            features={secondTarrif}
            id={2}
          />
          <button
            style={buttonStyle}
            type="button"
            className="join-button btn btn-warning"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"9990₽"}
            secondPrice={"10990₽"}
            thirdPrice={"11990₽ "}
            features={thirdTarrif}
            mentor={true}
            id={3}
          />
          <button
            style={buttonStyle}
            type="button"
            className="join-button btn btn-warning"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"25000₽"}
            features={thirdTarrif}
            individual={true}
            id={4}
          />
          <button
            style={buttonStyle}
            type="button"
            className="join-button btn btn-warning"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
      </Carousel>
    </div>
  );
}
