import React, { useState, useEffect } from "react";
import PriceCard, { IPriceCardProps } from "./PriceCard";
import Timer from "./Timer";
import Carousel from "react-elastic-carousel";

interface IPricesProps {
  priceCards: IPriceCardProps[];
}

const Prices: React.FC<IPricesProps> = ({ priceCards }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timerOff, setTimerOff] = useState(false);

  // Timer Logic For Automated Prices Change
  const countDownDate = new Date(Date.UTC(2020, 10, 29, 20, 0, 0)).getTime();

  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      const now: number = new Date().getTime();

      // Find the distance between now and the count down date
      const distance: number = countDownDate - now;
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
        // @ts-ignore
        autoTabIndexVisibleItems={false}
      >
        {priceCards.map((card) => {
          return (
            <PriceCard
              cardName={card.cardName}
              firstPrice={card.firstPrice}
              secondPrice={card.secondPrice}
              thirdPrice={card.thirdPrice}
              guides={card.guides}
              calls={card.calls}
              features={card.features}
              id={card.id}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Prices;
