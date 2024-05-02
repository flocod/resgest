
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function CountDownTimer() {
  const getDeadlineMS = localStorage.getItem("deadlineDeliverInMilliseconds") ?  Number(localStorage.getItem("deadlineDeliverInMilliseconds")) === 0 ? null :  Number(localStorage.getItem("deadlineDeliverInMilliseconds")) : null;

  const [deadlineTime, setDeadlineTime] = useState(Number(getDeadlineMS)); // Stores the deadline time in milliseconds
  const [remainingTimeState, setRemainingTimeState] = useState(0); // Stores the deadline time in milliseconds

  useEffect(() => {
    // Set deadline time on component mount

    let intervalId;

    if (!deadlineTime) {
      const readCard = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      let initTime = 0;
      console.log("PANIER : ",readCard)
      if (readCard && readCard.length > 0) {
        readCard.map(
          (item) => (initTime = initTime + Number(item.time * item.qte))
        );
      }

      const deadlineInMilliseconds = Date.now() + initTime * 60 * 1000;
      localStorage.setItem(
        "deadlineDeliverInMilliseconds",
        deadlineInMilliseconds
      );
      setDeadlineTime(deadlineInMilliseconds);
    }else if(deadlineTime > 0 ){

      intervalId = setInterval(() => {
        const now = Date.now();
        const remainingTime = deadlineTime - now;
        setRemainingTimeState(remainingTime);
        if (remainingTime <= 0) {
          localStorage.setItem(
            "deadlineDeliverInMilliseconds",
            0
          );

          localStorage.removeItem("cart");
        
          Swal.fire({
            icon: "success",
            title: "Good job!",
            text: "Votre Commande est prete !",
          });
          clearInterval(intervalId);
        }
      }, 1000);

    }



    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [deadlineTime, remainingTimeState]); // Re-run effect when deadlineTime changes

  const formattedTime = () => {
    if (!deadlineTime || remainingTimeState <= 0) return "00 min 00 sec";

    const minutes = Math.floor(remainingTimeState / (1000 * 60));
    const seconds = Math.floor((remainingTimeState % (1000 * 60)) / 1000);
    return `${minutes} min ${seconds.toString().padStart(2, "0")} sec`;
  };

  return (
    <div className="timer">
      <div className="title">
        Extimation du temps restant pour la preparation
      </div>
      <div className="timer_value">{formattedTime()}</div>
    </div>
  );
}

export default CountDownTimer;
