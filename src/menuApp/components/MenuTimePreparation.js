import React from 'react';

function MenuTimePreparation(props) {
    return (
      <div className="menu_preparation_time">
        {/* <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </svg> */}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none">
  <path d="M12 22C6.47711 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.4776 2 20.2257 4.94289 21.5 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M21.9551 13C21.9848 12.6709 22 12.3373 22 12M15 22C15.3416 21.8876 15.6753 21.7564 16 21.6078M20.7906 17C20.9835 16.6284 21.1555 16.2433 21.305 15.8462M18.1925 20.2292C18.5369 19.9441 18.8631 19.6358 19.1688 19.3065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

        <div className="text">
          {" "}
          <b>{props.time}</b> min
        </div>
      </div>
    );
  }
  

export default MenuTimePreparation;