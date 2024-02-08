import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const readCard = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  let initTime = 0;

  if (readCard && readCard.length > 0) {
    readCard.map((item) => (initTime = initTime + Number(item.time * item.qte)));
  }

  const [remainingTime, setRemainingTime] = useState(initTime * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  const minutesRemaining = Math.floor(remainingTime / 60);
  const secondsRemaining = remainingTime % 60;

  return (
    <div className="timer">
      <div className="title">
        Extimation du temps restant pour la preparation
      </div>
      <div className="timer_value">
        {minutesRemaining} min {secondsRemaining} s
      </div>
    </div>
  );
};

export default CountDownTimer;
