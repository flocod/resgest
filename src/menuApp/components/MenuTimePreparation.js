import React from 'react';

function MenuTimePreparation(props) {
    return (
      <div className="menu_preparation_time">
        <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.5 5.23242V6.74367L7.25833 7.50201"
            stroke="#3A3A3A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.97913 6.50008C2.97913 4.5555 4.55538 2.97925 6.49996 2.97925C8.44454 2.97925 10.0208 4.5555 10.0208 6.50008C10.0208 7.62675 9.48996 8.63425 8.66663 9.27883H8.66121C8.06538 9.74466 7.31788 10.0209 6.49996 10.0209C5.69288 10.0209 4.95079 9.75008 4.35496 9.28966H4.34954C3.51538 8.64508 2.97913 7.63758 2.97913 6.50008Z"
            stroke="#3A3A3A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.34973 9.28964H4.35515C4.95098 9.75006 5.69306 10.0209 6.50015 10.0209C7.31806 10.0209 8.06556 9.74464 8.6614 9.27881H8.66681L8.39056 10.6167C8.12515 11.6459 7.52931 11.9167 6.79806 11.9167H6.20765C5.4764 11.9167 4.87515 11.6459 4.61515 10.6113L4.34973 9.28964Z"
            stroke="#3A3A3A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.34973 3.71034H4.35515C4.95098 3.24992 5.69306 2.97909 6.50015 2.97909C7.31806 2.97909 8.06556 3.25534 8.6614 3.72117H8.66681L8.39056 2.38325C8.12515 1.35409 7.52931 1.08325 6.79806 1.08325H6.20765C5.4764 1.08325 4.87515 1.35409 4.61515 2.38867L4.34973 3.71034Z"
            stroke="#3A3A3A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text">
          {" "}
          <b>{props.time}</b> min
        </div>
      </div>
    );
  }
  

export default MenuTimePreparation;