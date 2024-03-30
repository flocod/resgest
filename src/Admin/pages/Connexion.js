import React from "react";
import "./styles.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";
const Connexion = () => {
  const [isPasswordHide, setPasswordHide] = useState(false);

  const handlePasswordHide = () => {
    setPasswordHide(!isPasswordHide);
    const input = document.querySelector('.password');
   
    if (isPasswordHide){
        input.type="password";
    }else{
        input.type="text";
    }
  }

  return (
    <main className="adminConnexion">
      <div className="main_container">
        <div className="contentForm">
          <div className="contentForm__struct">
            <h1>Welcome Back</h1>
            <p>Enter your credential to login</p>

            <div className="inputContainter">
              <div className="input">
                <label htmlFor="">
                  Your email <sup> *</sup>
                </label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="input">
                <label htmlFor="">
                  Password <sup> *</sup>
                </label>
                <input className="password" type="password" placeholder="Your password" />

                <div className="eye hide" onClick={handlePasswordHide}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={48}
                    height={48}
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {isPasswordHide && <div className="bar_hide"></div>}
                </div>
              </div>
            </div>

            <NavLink to="/admin/resetpassword" className=" link">
                <div className="textTag">Forgot Password ?</div>
            </NavLink>

            <button type="submit">Connexion</button>


            <div className="textTag textTagSimple">
              You don’t have an account ?{" "}
            </div>

            <NavLink to={"/admin/createaccount"}  className=" link">
              <div className="textTag textTagSimple btntextTag">
                Create Your Restaurant Account
              </div>
            </NavLink>


          </div>
        </div>
      </div>
    </main>
  );
};

export default Connexion;
