import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { countryPhone } from "../../utils";

const CreateAccount = () => {
  const [isPasswordHide, setPasswordHide] = useState(false);
  const [selectedInputFile, setSelectedInputFile] = useState("");

  let logo_input = useRef();
  let cover_input = useRef();
  let formRef = useRef(null);

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
    // evt.stopPropagation();
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

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultipleChange = (e) => {
    handleChangeInputFileImage(e);
    handleChange(e);
  };

  function validatePhoneNumberAndCountry(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Nettoyer le numéro de téléphone
    const countryCode = cleanedPhoneNumber.substring(0, 3); // Récupérer les 3 premiers caractères du numéro

    const country = countryPhone.find(
      (country) => country.code === countryCode
    );
    if (country) {
      return country.country; // Retourner le pays correspondant
    }

    return null; // Retourner null si aucun pays n'est trouvé
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.user_email ||
      !formData.user_tel ||
      !formData.user_name ||
      !formData.user_surname ||
      !formData.est_name ||
      !formData.est_location ||
      !formData.est_tel ||
      !formData.est_location_link ||
      !formData.est_description
    ) {
      setError("Tous les champs doivent être remplis.");
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Tous les champs doivent être remplis.",
      });
      return;
    }

    // Validation des types de valeurs
    if (
      typeof formData.user_email !== "string" ||
      typeof formData.user_name !== "string" ||
      typeof formData.user_surname !== "string" ||
      typeof formData.est_name !== "string" ||
      typeof formData.est_location !== "string" ||
      typeof formData.est_location_link !== "string" ||
      typeof formData.est_description !== "string"
    ) {
      setError(
        "Les valeurs des champs doivent être des chaînes de caractères."
      );
      return;
    }

    const form = formRef.current;

    console.log("form", form);

    // Création de l'objet FormData

    const formDataToSend = new FormData(form);

    const newFormData = new FormData();
    for (const [key, value] of formDataToSend.entries()) {
      switch (key) {
        case "user_email":
          newFormData.append("USER_EMAIL", value);
          break;
        case "user_tel":
          const isValidPhone = validatePhoneNumberAndCountry(formData.user_tel);

          if (isValidPhone === null) {
            Swal.fire({
              icon: "error",
              title: "Erreur",
              text: "Numéro de téléphone invalide, préciser l'indicatif exemple :+237XXXXXXXXXX",
            });
            return;
          } else {
            newFormData.append("ESTABLISHMENT_COUNTRY", isValidPhone);
          }

          newFormData.append("USER_TEL", value);
          break;
        case "user_name":
          newFormData.append("USER_NAME", value);
          break;
        case "user_surname":
          newFormData.append("USER_SURNAME", value);
          break;
        case "est_name":
          newFormData.append("ESTABLISHMENT_NAME", value);
          break;
        case "est_location":
          newFormData.append("ESTABLISHMENT_LOCATION", value);
          break;
        case "est_tel":
          const est_tel = validatePhoneNumberAndCountry(formData.est_tel);

          if (est_tel === null) {
            Swal.fire({
              icon: "error",
              title: "Erreur",
              text: "Numéro de téléphone invalide, préciser l'indicatif exemple :+237XXXXXXXXXX",
            });
            return;
          }

          newFormData.append("ESTABLISHMENT_PHONE", value);
          break;
        case "est_location_link":
          newFormData.append("ESTABLISHMENT_LOCATION_LINK", value);
          break;
        case "est_description":
          newFormData.append("ESTABLISHMENT_DESCRIPTION", value);
          break;
        case "est_logo":
          newFormData.append("ESTABLISHMENT_LOGO", value);
          break;
        case "est_couverture":
          newFormData.append("ESTABLISHMENT_COVER", value);
          break;

        default:
          break;
      }
    }

    console.log("newFormData : ", newFormData);

    // Envoi des données à l'API
    const URL_API = "http://127.0.0.1:3007/api/public/establishment/";
    fetch(URL_API, {
      method: "POST",
      body: newFormData,
      redirect: "follow",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data :", data);

        if (data.reponse === 1) {
          Swal.fire({
            icon: "success",
            title: "Succès",
            text: `${data.message}`,
          });
          // formRef.current.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: `${data.message}`,
          });
        }
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Une erreur s'est produite lors de l'envoi des données.",
        });
      });
  };

  return (
    <main className="adminConnexion">
      <div className="main_container">
        <div className="contentForm createaccount">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="contentForm__struct"
          >
            <h1>Sign up</h1>
            <p>Create your restaurant account</p>
            <p>
              Already have an account ?
              <NavLink to={"/admin"} className={"link"}>
                {" "}
                Login
              </NavLink>
            </p>

            <h4>User Informations</h4>
            <div className="flexContainer">
              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="user_email">
                    Your email <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div className="input inputMargin">
                  <label htmlFor="username">
                    Name <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="username"
                    name="user_name"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
              </div>

              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="user_tel">
                    Phone Number <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    id="user_tel"
                    name="user_tel"
                    placeholder="Enter your number"
                    required
                  />
                </div>

                <div className="input">
                  <label htmlFor="user_surname">
                    Surname <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="user_surname"
                    name="user_surname"
                    placeholder="Your surname"
                    required
                  />
                </div>
              </div>
            </div>

            <h4>Establishment Informations</h4>

            <div className="flexContainer">
              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="est_name">
                    Restaurant Name <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="est_name"
                    name="est_name"
                    placeholder="Your restaurant name"
                    required
                  />
                </div>

                <div className="input inputMargin">
                  <label htmlFor="est_location">
                    Restaurant Location <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="est_location"
                    name="est_location"
                    placeholder="Enter your Location"
                    required
                  />
                </div>
              </div>

              <div className="inputContainter">
                <div className="input">
                  <label htmlFor="est_tel">
                    Restaurant Phone Number <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    id="est_tel"
                    name="est_tel"
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className="input">
                  <label htmlFor="est_location_link">
                    Restaurant Location link <sup>*</sup>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="est_location_link"
                    name="est_location_link"
                    placeholder="https://map.google.com/"
                  />
                </div>
              </div>
            </div>

            <div className="inputContainter">
              <div className="input inputTextarea">
                <label htmlFor="est_description">
                  Restaurant Description <sup>*</sup>
                </label>
                <textarea
                  name="est_description"
                  id="est_description"
                  cols="20"
                  rows="4"
                  placeholder="Enter your Restaurant description"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="flexContainer inputFileContainer">
              <div className="inputContainter" onClick={handleClickCover_btn}>
                <div className="input inputFile inputMargin">
                  <label htmlFor="est_couverture">
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
                  <label htmlFor="est_logo">
                    Restaurant logo <sup>*</sup>
                  </label>
                  <div className="image">
                    <img className="logoIMG" src="" alt="Logo du restaurant" />
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
              onChange={handleMultipleChange}
              ref={logo_input}
              type="file"
              name="est_logo"
              id="est_logo"
              className="inputFileVal"
              required
              accept=".jpg, .jpeg, .png, .gif, .webp"
            />
            <input
              onChange={handleMultipleChange}
              ref={cover_input}
              type="file"
              name="est_couverture"
              id="est_couverture"
              className="inputFileVal"
              required
              accept=".jpg, .jpeg, .png, .gif, .webp"
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
