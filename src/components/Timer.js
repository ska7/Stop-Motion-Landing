import React, { useEffect, useState } from "react";

export default function Timer({
  distance,
  days,
  hours,
  minutes,
  seconds,
  timerOff,
}) {
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
}
