import React, { useState, useEffect } from "react";
import imgFinal from "../images/3D Food Icon by  final.webp";
import { NavLink } from "react-router-dom";
import CountDownTimer from "../components/CountDownTimer";
import { useNavigate } from "react-router-dom";

const Finalize = (props) => {
let navigate = useNavigate(); 
const goHome = () => {
  // Try to get the link from local storage
  let link;
  try {
    const data = localStorage.getItem("currentEstablishmentData");
    if (data) {
      const parsedData = JSON.parse(data);
      link = parsedData?.currentEstablishment?.ESTABLISHMENT_LINK || 0;
    }
  } catch (error) {
    console.error("Error parsing currentEstablishmentData:", error);
  }

  // If link exists in local storage, use it
  if (link) {
    navigate(`/${link}`);
  } else {
    // Fallback: Extract link from current URL
    const EST_Link = window.location.href.split("/checkout")[0].split('/').pop();
    navigate(`/${EST_Link}`);
  }
};


  return (
    <main className="menuDetails Checkout Finalize">
      <div className="main_struct">
        <div className="image">
          <img src={imgFinal} alt={imgFinal} />
        </div>

        <div className="container">
          <h2>Nous avons recu votre Commande</h2>
          <p>
            Restez sur cette page pour suivre en tant réel l’évolution de votre
            commande
          </p>

          <CountDownTimer ></CountDownTimer>

          <div onClick={goHome} className="bnt link">
            Allez à la page d'acceuil
          </div>
        </div>
      </div>
    </main>
  );
};

export default Finalize;
