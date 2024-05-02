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
import { createUser, userEstablishment, deleteUser } from "../API/api";
import { useNavigate } from "react-router-dom";

const Admin = () => {
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

  
  const stateUser = {
    activer : 2,
    desactiver : 3,
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (e)=>{
    const userId = e.target.getAttribute("userid");

    const formData = new FormData();
    formData.append("USER_ID", userId);
  
    deleteUser(formData).then((res) => {
      if (res) {
        console.log(res);
        getUserByEstablishments();
      }
    });
  }


  const getUserByEstablishments = async () => {
    try {
     console.log( getUserData());
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

    createUser(newFormData).then( async (res) => {
      if (res) {
        console.log("res", res);
        await getUserByEstablishments();
      }
    });
  };



  useEffect(() => {
    const fetchUserByEstablishments = async () => {
      try {
       console.log( getUserData());
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

    fetchUserByEstablishments();
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
                  <div className="orderTab">
                    <div className="head_statItem">
                      <span className="title">Administrators List</span>
                      <select name="time" id="">
                        <option value="This month">This month</option>
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                      </select>
                    </div>

                    <div className="table_container">
                      <div className="table_container__innerContainer">
                        <table className="table tableMenuList">
                          <tbody>
                            <tr className="thead">
                              <td>N°</td>
                              <td>Admin Type</td>
                              <td>Status</td>
                              <td>Name</td>
                              <td>Email</td>
                              
                              <td>Actions</td>
                            </tr>

                            {filteredEstablishments.map((user,index) => (
                              <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{user.USER_TYPE_NAME}</td>
                                <td>
                                { user.USER_TYPE === 2 ? <ToggleBtn actionType={"toggleAdmin"} id={user.USER_ID} state={user.USER_STATE=== stateUser.activer ? true : false} ></ToggleBtn> : ""}
                                </td>
                                <td>{user.USER_NAME} </td>
                                <td>{user.USER_EMAIL}</td>

                                <td>{user.DATE}</td>
                                <td>
                                  <div className="btnAction">
                                    <NavLink to={`./updateadmin?id=${user.USER_ID}`} className="btnAction__item btnAction--edit link">
                                      Edit
                                    </NavLink>

                                    { user.USER_TYPE === 2 ? <div onClick={handleDelete} userid={user.USER_ID} className="btnAction__item btnAction--cancel">Delete</div> : ""}

                                    
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="actionbtn">
                      {" "}
                      <div className="text">View more</div>{" "}
                      <svg
                        className="frame"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12H4"
                          stroke="#00B031"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                          stroke="#00B031"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="contentForm createaccount">
                    <form
                      className="contentForm__struct"
                      onSubmit={handleSubmit}
                      ref={CreateAdminForm}
                    >
                      <div className="head_statItem">
                        <span className="title">Add an administrator</span>
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
                        <button type="submit">Add Administrator</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
