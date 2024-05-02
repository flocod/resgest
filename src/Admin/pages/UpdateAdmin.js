import React, { useRef, useState, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import ToggleBtn from "../components/ToggleBtn";
import { NavLink } from "react-router-dom";
// import BtnMain from "../components/BtnMain";
import Swal from "sweetalert2";
import { validatePhoneNumberAndCountry, getUserData } from "../../utils";
import {
  createUser,
  userEstablishment,
  getUserByID,
  updateUser,
} from "../API/api";
import { useNavigate } from "react-router-dom";

const UpdateAdmin = () => {
  const [filteredEstablishments, setFilteredEstablishments] = useState([]);
  const CreateAdminForm = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    subname: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [url, setUrl] = useState(window.location.href);

  const stateUser = {
    activer: 2,
    desactiver: 3,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getUserByEstablishments = async () => {
    try {
      console.log(getUserData());
      userEstablishment(getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID).then(
        (res) => {
          if (res) {
            setFilteredEstablishments(res.data);
            console.log("res", res);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getIdParamFromURL = (url) => {
    try {
      const urlParams = new URLSearchParams(url);
      const params = {};

      // Parcourir tous les paramètres de l'URL et les stocker dans un objet
      for (const [key, value] of urlParams) {
        console.log("key, value :", key, value);
        if (key) {
          params["id"] = value;
        }
      }

      return params.id;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'extraction des paramètres de l'URL:",
        error.message
      );
      return {};
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs (ajoutez votre propre logique de validation)
    if (
      !formData.name ||
      !formData.subname ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.password_confirm
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez remplir tous les champs.",
      });
      return;
    }

    const isValidPhone = validatePhoneNumberAndCountry(formData.phone);
    if (isValidPhone === null) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Numéro de téléphone invalide, préciser l'indicatif exemple :+237XXXXXXXXXX",
      });
      return;
    }

    if (formData.password !== formData.password_confirm) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Les mots de passe ne correspondent pas.",
      });
      return;
    }

    const FormDATA = new FormData(CreateAdminForm.current);
    const newFormData = new FormData();

    newFormData.append("USER_ID", getIdParamFromURL(url));

    for (const [key, value] of FormDATA.entries()) {
      switch (key) {
        case "name":
          newFormData.append("USER_NAME", value);
          break;
        case "subname":
          newFormData.append("USER_SUBNAME", value);
          break;
        case "email":
          newFormData.append("USER_EMAIL", value);
          break;
        case "phone":
          newFormData.append("USER_TEL", value);
          break;
        case "password":
          newFormData.append("USER_PASSWORD", value);
          break;
        default:
          break;
      }
    }

    console.log("getUserData() ---->", getUserData());
    newFormData.append(
      "ESTABLISHMENT_ID",
      getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID
    );

    updateUser(newFormData).then(async (res) => {
      if (res.reponse) {
        console.log("res", res);
        // await getUserByEstablishments();
        //! mise a jour du localStorage CurrentUser
        const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
        console.log(CurrentUser);

        //        UPDATE_AT
        // :
        // "1714387662129"
        // USER_EMAIL
        // :
        // "test@gmail.com"
        // USER_ID
        // :
        // "USER-29-04-24-1714384738082"
        // USER_NAME
        // :
        // "christelle"
        // USER_PASSWORD
        // :
        // "test1"
        // USER_SUBNAME
        // :
        // "ddfdf"
        // USER_TEL
        // :
        // "+2376584245"

        console.log("res.data========>", res.data);
        const userCreateAt = CurrentUser.user.CREATE_AT;
        delete CurrentUser.user;
        CurrentUser["user"] = { ...res.data };
        CurrentUser["user"]["CREATE_AT"] = userCreateAt;
        delete CurrentUser["user"]["USER_PASSWORD"];
        localStorage.setItem("CurrentUser", JSON.stringify(CurrentUser));
        console.log("Update CurrentUser", CurrentUser);
      }
    });
  };

  useEffect(() => {
    const fetchGetUserByID = async () => {
      const tempUrl = getIdParamFromURL(url);
      console.log("tempUrl", tempUrl);
      try {
        getUserByID(tempUrl).then((res) => {
          if (res) {
            console.log("res", res);

            setFormData({
              name: res.data.USER_NAME,
              subname: res.data.USER_SUBNAME,
              phone: res.data.USER_TEL,
              email: res.data.USER_EMAIL,
              password: res.data.USER_PASSWORD,
              password_confirm: res.data.USER_PASSWORD,
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchGetUserByID();
  }, []);

  return (
    <main className="adminConnexion dashboard CategoriesPage">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Administrators</div>
                  <div className="t2">Manage administrator</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>

              <div className="section section4 sectionMenulist">
                <div className="flex_Categories">
                  <div className="contentForm createaccount">
                    <form
                      className="contentForm__struct"
                      onSubmit={handleSubmit}
                      ref={CreateAdminForm}
                    >
                      <div className="head_statItem">
                        <span className="title">Update an administrator</span>
                        <div className="Pmargin"></div>
                      </div>
                      <div className="FormAddMenu__struct">
                        <div className="inputContainter">
                          <div className="input">
                            <label htmlFor="name">
                              Name <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter name"
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="subname">
                              Subname <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="subname"
                              value={formData.subname}
                              onChange={handleChange}
                              placeholder="Enter your subname"
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="phone">
                              Phone <sup>*</sup>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+237xxxxxxxx (precise country indication)"
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="email">
                              Email <sup>*</sup>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="password">
                              Password <sup>*</sup>
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Enter password"
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="password_confirm">
                              Confirm Password <sup>*</sup>
                            </label>
                            <input
                              type="password"
                              name="password_confirm"
                              value={formData.password_confirm}
                              onChange={handleChange}
                              placeholder="Confirm password"
                            />
                          </div>
                        </div>
                        <button type="submit">Update Administrator</button>
                      </div>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAdmin);
