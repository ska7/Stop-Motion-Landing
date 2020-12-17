import React, { useEffect, useState } from "react";

interface ITimerProps {
  distance?: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  timerOff?: boolean;
}

const Timer: React.FC<ITimerProps> = ({
  distance,
  days,
  hours,
  minutes,
  seconds,
  timerOff,
}) => {
  return (
    <div className={`timer ${timerOff && "off"}`}>
      <h2>До конца скидок </h2>
      <h1
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          padding: "5px",
        }}
      >{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
    </div>
  );
};

export default Timer;
