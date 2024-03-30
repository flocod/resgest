import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const CreateAccount = () => {
  const [isPasswordHide, setPasswordHide] = useState(false);
  const [selectedInputFile, setSelectedInputFile] = useState("");

  let logo_input = useRef();
  let cover_input = useRef();

  const handlePasswordHide = () => {
    setPasswordHide(!isPasswordHide);
    const input = document.querySelector(".password");

    if (isPasswordHide) {
      input.type = "password";
    } else {
      input.type = "text";
    }
  };

  const handleChangeInputFileImage = (evt) => {
    evt.stopPropagation();
    let picImg = document.querySelector(`.${selectedInputFile}`);
    console.log("selectedInputFile :", selectedInputFile);
    console.log("picImg", picImg);
    if (picImg) {
      let file = evt.target.files[0];
      if (file) {
        let src = URL.createObjectURL(file);
        picImg.src = src;
        picImg.classList.add("active");
      }
    }
  };

  const handleClickLogo_btn = () => {
    logo_input.current.click();
    setSelectedInputFile("logoIMG");
  };

  const handleClickCover_btn = () => {
    cover_input.current.click();
    setSelectedInputFile("coverIMG");
  };

  return (
    <main className="adminConnexion">
      <div className="main_container">
        <div className="contentForm createaccount">
          <form className="contentForm__struct">
            <h1>Sign up</h1>
            <p>Create your restaurant account</p>
            <p>
              Already have an account ?
              <NavLink to={"/admin"} className={"link"}>
                {" "}
                Login
              </NavLink>
            </p>

            <div className="flexContainer">
              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="">
                    Your email <sup>*</sup>
                  </label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="input">
                  <label htmlFor="">
                    Restaurant Phone Number <sup>*</sup>
                  </label>
                  <input type="tel" placeholder="Enter your number" />
                </div>
                <div className="input">
                  <label htmlFor="">
                    Restaurant Location <sup>*</sup>
                  </label>
                  <input type="tel" placeholder="Enter your Location" />
                </div>
              </div>

              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="">
                    Restaurant Name <sup>*</sup>
                  </label>
                  <input type="text" placeholder="Your restaurant name" />
                </div>
                <div className="input">
                  <label htmlFor="">
                    Restaurant Location link <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="https://map.google.com/"
                  />
                </div>
                <div className="input">
                  <label htmlFor="">
                    Restaurant Email <sup>*</sup>
                  </label>
                  <input type="Email" placeholder="Your restaurant email" />
                </div>
              </div>
            </div>

            <div className="inputContainter">
              <div className="input inputTextarea">
                <label htmlFor="">
                  Restaurant Description <sup>*</sup>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="4"
                  placeholder="Enter your Restaurant description"
                ></textarea>
              </div>
            </div>

            <div className="flexContainer">
              <div className="inputContainter" onClick={handleClickCover_btn}>
                <div className="input inputFile">
                  <label htmlFor="">
                    Restaurant Couverture <sup>*</sup>
                  </label>
                  <div className="image">
                    <img
                      className="coverIMG"
                      src=""
                      alt="couverture du restaurant"
                    />
                    <svg
                      width={28}
                      height={27}
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                        fill="#717E91"
                      />
                      <path
                        d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="inputContainter" onClick={handleClickLogo_btn}>
                <div className="input inputFile">
                  <label htmlFor="">
                    Restaurant logo <sup>*</sup>
                  </label>
                  <div className="image">
                    <img
                      className="logoIMG"
                      src=""
                      alt="Logo du restaurant"
                    />
                    <svg
                      width={28}
                      height={27}
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                        fill="#717E91"
                      />
                      <path
                        d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                        stroke="#717E91"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit">Connexion</button>

            <input
              onChange={handleChangeInputFileImage}
              ref={logo_input}
              type="file"
              name="logo"
              className="inputFileVal"
            />
            <input
              onChange={handleChangeInputFileImage}
              ref={cover_input}
              type="file"
              name="couverture"
              className="inputFileVal"
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
