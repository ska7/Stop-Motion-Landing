import React, { useEffect, useState } from "react";

export default function Timer() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const countDownDate = new Date("Nov 28, 2020 13:00:00").getTime();

  // Update the count down every 1 second
  const setCountDown = setInterval(() => {
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
    if (distance < 0) {
      clearInterval(setCountDown);
      // document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

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
      if (distance < 0) {
        clearInterval(setCountDown);
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  return (
    <div className="timer">
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
