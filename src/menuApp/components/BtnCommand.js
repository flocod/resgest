import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formatNumberWith } from "../../utils";

function BtnCommand(props) {
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

        {props.from && props.from === "checkout" ? (
          <button
            to={amoutBasket === 0 ? "#" : props.to}
            className="btn_command link"
            onClick={props.handleClick}
          >
            <div className="text">Commander</div>
            <svg
              className="ico"
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9507 1.85159L14.3855 14.3047C14.192 15.1836 13.6873 15.4024 12.9701 14.9883L9.0616 12.0235L7.17566 13.8906C6.96695 14.1055 6.7924 14.2852 6.39017 14.2852L6.67097 10.1875L13.9149 3.44924C14.2299 3.16018 13.8466 3.00002 13.4254 3.28909L4.47008 9.09377L0.614723 7.85159C-0.223893 7.58205 -0.239072 6.9883 0.789276 6.57424L15.8692 0.593773C16.5674 0.324242 17.1783 0.75393 16.9507 1.85159Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          <NavLink
            to={amoutBasket === 0 ? "#" : props.to}
            className="btn_command link"
          >
            <div className="text">Commander</div>
            <svg
              className="ico"
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9507 1.85159L14.3855 14.3047C14.192 15.1836 13.6873 15.4024 12.9701 14.9883L9.0616 12.0235L7.17566 13.8906C6.96695 14.1055 6.7924 14.2852 6.39017 14.2852L6.67097 10.1875L13.9149 3.44924C14.2299 3.16018 13.8466 3.00002 13.4254 3.28909L4.47008 9.09377L0.614723 7.85159C-0.223893 7.58205 -0.239072 6.9883 0.789276 6.57424L15.8692 0.593773C16.5674 0.324242 17.1783 0.75393 16.9507 1.85159Z"
                fill="white"
              />
            </svg>
          </NavLink>
        )}
        {/* 
        <NavLink  to={ amoutBasket === 0 ? "#" : props.to  } className="btn_command link">
          <div className="text">Commander</div>
          <svg
            className="ico"
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9507 1.85159L14.3855 14.3047C14.192 15.1836 13.6873 15.4024 12.9701 14.9883L9.0616 12.0235L7.17566 13.8906C6.96695 14.1055 6.7924 14.2852 6.39017 14.2852L6.67097 10.1875L13.9149 3.44924C14.2299 3.16018 13.8466 3.00002 13.4254 3.28909L4.47008 9.09377L0.614723 7.85159C-0.223893 7.58205 -0.239072 6.9883 0.789276 6.57424L15.8692 0.593773C16.5674 0.324242 17.1783 0.75393 16.9507 1.85159Z"
              fill="white"
            />
          </svg>
        </NavLink> */}
      </div>
    </div>
  );
}

export default BtnCommand;
