import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formatNumberWith } from "../../utils";

function BtnCommandCheckOut(props) {
  let amoutBasket = 0;
  let initAmoutBasket = 0;
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    cart.map(
      (item) => (initAmoutBasket = initAmoutBasket + Number(item.price))
    );
  }

  amoutBasket = initAmoutBasket;

  useEffect(() => {
    const btn = document.querySelectorAll(".btn_command");
    if (amoutBasket === 0) {
      btn.forEach((bt) => {
        bt.disabled = true;
        bt.style.opacity = "0";
      });
    } else {
      btn.forEach((bt) => {
        bt.disabled = false;
        bt.style.opacity = "1";
      });
    }
    return () => {};
  }, [amoutBasket]);

  return (
    <div className={`${props.ui ? props.ui : ""} box_btn_command`}>
      <div className="box_btn_command__struct">
        <div className="totalPanier">
          <div className="text">Total Panier (FCFA)</div>
          <div className="total" devise="">
            {formatNumberWith(amoutBasket, ",")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtnCommandCheckOut;
