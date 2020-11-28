import React from "react";
import PriceCard from "./PriceCard";
import Timer from "./Timer";
import Carousel from "react-elastic-carousel";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import {
  firstTarrif,
  fourthTarrif,
  guides,
  secondPart,
  secondTarrif,
  thirdTarrif,
} from "./tarrif-features";
import PaymentForm from "./PaymentForm";

export default function Prices() {
  const tooltip = `Бронь места на любой из тарифов — закрепляет за вами место и цену, по которой вы оплатили. Бронь тарифа является частичной оплатой места, то есть остальная оплата — стоимость по тарифу минус бронь.
  есть рассрочка на все тарифы, кроме первого — платежи в три этапа — сумма тарифа делится на три части и вы вносите оплату в соответствии с графиком платежей.
  `;
  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="prices-section">
      <h1 id="prices" style={{ marginTop: "35px" }}>
        Тарифы
      </h1>
      <Timer />
      <Carousel
        itemPadding={[100, 100, 100, 100]}
        // initialActiveIndex={activeIndex}
      >
        <div style={center}>
          <PriceCard
            firstPrice={1290}
            secondPrice={1690}
            thirdPrice={1990}
            features={firstTarrif}
            id={1}
          />
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={3990}
            secondPrice={4290}
            thirdPrice={4590}
            guides={guides}
            features={secondTarrif}
            id={2}
          />
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={9990}
            secondPrice={10990}
            thirdPrice={11990}
            features={thirdTarrif}
            secondPart={secondPart}
            guides={guides}
            mentor={true}
            id={3}
          />
        </div>
        <div style={center}>
          <PriceCard
            firstPrice={"25000₽"}
            features={fourthTarrif}
            secondPart={secondPart}
            individual={true}
            guides={guides}
            id={4}
          />
        </div>
      </Carousel>
    </div>
  );
}
