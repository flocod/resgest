import React, { useState, useRef, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
// import BtnMain from "../components/BtnMain";
import { getEstablishment } from "../API/api";
import { getUserData } from "../../utils";
function Day(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked || false); // Initialize isChecked based on props or default to false

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="day">
      <div className="checkDay">
        <input
          id={props.day}
          type="checkbox"
          checked={isChecked}
          value={props.day}
          name={props.day}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={props.day}>{props.day}</label>
      </div>

      <div className="containHours">
        <div className="itemHours openHours">
          <label htmlFor={`${props.day}Open`}>Open</label>
          <input type="time" id={`${props.day}Open`} name={`${props.day}Open`} />
        </div>
        <div className="itemHours closeHours">
          <label htmlFor={`${props.day}Close`}>Close</label>
          <input type="time" id={`${props.day}Close`} name={`${props.day}Close`} />
        </div>
      </div>
    </div>
  );
}

const Settings = () => {
  const openDays = {
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  };

  const [isPasswordHide, setPasswordHide] = useState(false);
  const [selectedInputFile, setSelectedInputFile] = useState("");
  const [isEstFetch, setIsEstFetch] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    est_email: "",
    est_name: "",
    est_phone: "",
    est_location: "",
    est_location_link: "",
    est_description: "",
    est_logo: "",
    est_cover: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

    const { name} = evt.target;
    setFormData({
      ...formData,
      [name]: evt.target.files[0],
    });

  };

  const handleClickLogo_btn = () => {
    logo_input.current.click();
    setSelectedInputFile("logoIMG");
  };

  const handleClickCover_btn = () => {
    cover_input.current.click();
    setSelectedInputFile("coverIMG");
  };

  const fn_getEstablishment = async () => {
    console.log("res fefef -------------------")
    try {
     console.log( getUserData());
      getEstablishment(getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID).then(
        (res) => {
          if (res) {
            console.log("res fefef -------------------",res)
            setFormData({
              user_email: getUserData().user.USER_EMAIL,
              est_email: res.data.ESTABLISHMENT_EMAIL,
              est_name: res.data.ESTABLISHMENT_NAME,
              est_phone: res.data.ESTABLISHMENT_PHONE,
              est_location: res.data.ESTABLISHMENT_LOCATION,
              est_location_link: res.data.ESTABLISHMENT_LOCATION_LINK,
              est_description: res.data.ESTABLISHMENT_DESCRIPTION,
              est_logo: res.data.ESTABLISHMENT_LOGO,
              est_cover: res.data.ESTABLISHMENT_COVER,
            })
            console.log("res", res);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {

    if (!isEstFetch) {
      fn_getEstablishment();
      setIsEstFetch(true);
    }
   

  }, [isEstFetch]);


  return (
    <main className="adminConnexion dashboard AddMenu SettingsPage">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Settings</div>
                  <div className="t2">All général settings</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>

              <div className="flex_Categories">
                <div className="contentForm createaccount">
                  <form className="contentForm__struct">
                    <div className="head_statItem">
                      <span className="title">Establishment configuration</span>
                      <div className="Pmargin"></div>
                    </div>

                    <div className="flexContainer">
                      <div className="inputContainter">
                        <div className="input">
                          <label htmlFor="">
                            Your email <sup>*</sup>
                          </label>
                          <input onChange={handleChange} name="user_email" value={formData.user_email} type="email" placeholder="example@gmail.com" />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Phone Number <sup>*</sup>
                          </label>
                          <input  onChange={handleChange} name="est_phone" value={formData.est_phone} type="tel" placeholder="Enter your number" />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Location <sup>*</sup>
                          </label>
                          <input  onChange={handleChange} name="est_location" value={formData.est_location} type="tel" placeholder="Enter your Location" />
                        </div>
                      </div>

                      <div className="inputContainter">
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Name <sup>*</sup>
                          </label>
                          <input
                           onChange={handleChange}
                            type="text"
                            placeholder="Your restaurant name"
                            name="est_name" value={formData.est_name}
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Location link <sup>*</sup>
                          </label>
                          <input
                           onChange={handleChange}
                            type="text"
                            placeholder="https://map.google.com/"
                            name="est_location_link" value={formData.est_location_link}
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Email <sup>*</sup>
                          </label>
                          <input
                           onChange={handleChange}
                            type="Email"
                            placeholder="Your restaurant email"
                            name="est_email" value={formData.est_email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inputContainter inputMargin">
                      <div className="input inputTextarea">
                        <label htmlFor="">
                          Restaurant Description <sup>*</sup>
                        </label>
                        <textarea
                           onChange={handleChange}
                          id=""
                          cols="20"
                          rows="4"
                          placeholder="Enter your Restaurant description"
                          name="est_description" value={formData.est_description}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flexContainer ">
                      <div
                        className="inputContainter inputMargin"
                        onClick={handleClickCover_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Restaurant Couverture <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                            style={
                                formData.est_cover
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="coverIMG"
                              src={formData.est_cover}
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

                      <div
                        className="inputContainter inputMargin"
                        onClick={handleClickLogo_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Restaurant logo <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                             style={
                                formData.est_logo
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="logoIMG"
                              src={formData.est_logo}
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

                    <button type="submit">Update</button>

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

                <div className="BoxOpenDay ">
                  <div className="BoxOpenDay__struct">
                    <div className="head_statItem">
                      <span className="title">Open Days</span>
                    </div>

                    <div className="containDays">
                      <Day day="Monday" isChecked={openDays.monday}></Day>
                      <Day day="Tuesday" isChecked={openDays.tuesday}></Day>
                      <Day day="Wednesday" isChecked={openDays.wednesday}></Day>
                      <Day day="Thursday"  isChecked={openDays.thursday}></Day>
                      <Day day="Friday" isChecked={openDays.friday}></Day>
                      <Day day="Saturday" isChecked={openDays.saturday}></Day>
                      <Day day="Sunday" isChecked={openDays.sunday}></Day>
                    </div>

                    <button type="submit">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
  isMenuActive: state.isMenuActive,
});

const mapDispatchToProps = {
  increment,
  decrement,
  menuio,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
