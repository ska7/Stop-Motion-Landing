import React, { useState, useEffect } from "react";
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
export default function Prices() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timerOff, setTimerOff] = useState(false);

  const tooltip = `Бронь места на любой из тарифов — закрепляет за вами место и цену, по которой вы оплатили. Бронь тарифа является частичной оплатой места, то есть остальная оплата — стоимость по тарифу минус бронь.
  есть рассрочка на все тарифы, кроме первого — платежи в три этапа — сумма тарифа делится на три части и вы вносите оплату в соответствии с графиком платежей.
  `;
  const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  // Timer Logic For Automated Prices Change
  const countDownDate = new Date(Date.UTC(2020, 10, 29, 20, 0, 0)).getTime(); // 20 hours

  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is finished, write some text
      if (distance <= 0) {
        setTimerOff(true);
      }
    }, 1000);
  });

  return (
    <div className="prices-section">
      <h1 id="prices" style={{ marginTop: "35px" }}>
        Тарифы
      </h1>
      <Timer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        timerOff={timerOff}
      />
      <Carousel
        itemPadding={[100, 100, 100, 100]}
        autoTabIndexVisibleItems={false}
      >
        <PriceCard
          firstPrice={"1290"}
          secondPrice={"1690"}
          thirdPrice={"1990"}
          features={firstTarrif}
          id={1}
          timerOff={timerOff}
        />

        <PriceCard
          firstPrice={"3990"}
          secondPrice={"4290"}
          thirdPrice={"4590"}
          features={secondTarrif}
          guides={guides}
          id={2}
          timerOff={timerOff}
        />

        <PriceCard
          firstPrice={"9990"}
          secondPrice={"10990"}
          thirdPrice={"11990 "}
          features={thirdTarrif}
          secondPart={secondPart}
          guides={guides}
          mentor={true}
          id={3}
          timerOff={timerOff}
        />
        <PriceCard
          firstPrice={"25000"}
          secondPrice={"12500"}
          features={fourthTarrif}
          secondPart={secondPart}
          guides={guides}
          individual={true}
          id={4}
          timerOff={timerOff}
        />
      </Carousel>
    </div>
  );
}
