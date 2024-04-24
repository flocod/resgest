import React from "react";
import "./styles.scss";

import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <main className="adminConnexion">
      <div className="main_container">
        <div className="contentForm">
          <div className="contentForm__struct">
            <div className="icoLogo">
              <svg
                width={87}
                height={87}
                viewBox="0 0 87 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 18.125L32.3097 32.3517C41.4653 37.5496 45.5347 37.5496 54.6904 32.3517L79.75 18.125"
                  stroke="#FF6B01"
                  strokeWidth={3}
                  strokeLinejoin="round"
                />
                <path
                  d="M38.0625 70.6875C36.3722 70.6654 34.6797 70.6331 32.9833 70.5903C21.5699 70.3036 15.8633 70.1601 11.763 66.0417C7.66263 61.9233 7.54413 56.364 7.30717 45.2451C7.23097 41.6697 7.23093 38.1158 7.30713 34.5406C7.54413 23.4216 7.6626 17.8621 11.7629 13.7438C15.8633 9.62546 21.5699 9.48202 32.9832 9.1951C40.0175 9.01827 46.9825 9.01831 54.0169 9.19514C65.4302 9.48206 71.1366 9.62553 75.2369 13.7439C79.3375 17.8622 79.456 23.4216 79.6927 34.5406C79.7279 36.1866 79.7467 36.9623 79.7496 38.0625"
                  stroke="#FF6B01"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.875 61.625C68.875 64.628 66.4405 67.0625 63.4375 67.0625C60.4345 67.0625 58 64.628 58 61.625C58 58.622 60.4345 56.1875 63.4375 56.1875C66.4405 56.1875 68.875 58.622 68.875 61.625ZM68.875 61.625V63.4375C68.875 66.4405 71.3095 68.875 74.3125 68.875C77.3155 68.875 79.75 66.4405 79.75 63.4375V61.625C79.75 52.6158 72.4467 45.3125 63.4375 45.3125C54.4283 45.3125 47.125 52.6158 47.125 61.625C47.125 70.6342 54.4283 77.9375 63.4375 77.9375"
                  stroke="#FF6B01"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1>Reset your password</h1>
            <p className="Pmargin">A reset Link will be send to your email address </p>

            <div className="inputContainter">
              <div className="input">
                <label htmlFor="">
                  Your email <sup> *</sup>
                </label>
                <input required type="email" placeholder="example@gmail.com" />
              </div>
            </div>
            <button type="submit">Connexion</button>

            <NavLink to={"/Admin"} className={"link"}>
              <div className="textTag textTagSimple btntextTag">
                Login to your account
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
