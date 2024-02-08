import React, { useState, useEffect } from "react";
import imgFinal from "../images/3D Food Icon by  final.png";
import { NavLink } from "react-router-dom";
import CountDownTimer from "../components/CountDownTimer";
const Finalize = (props) => {
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

          <CountDownTimer minutes="50"></CountDownTimer>

          <NavLink to="/" className="bnt link">
            Allez à la page d'acceuil
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Finalize;
