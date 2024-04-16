import React from "react";
import "./styles.scss";
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { userLogin } from "../API/api";
import {useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import { userconnection } from '../../redux/action'; // Import the action type

const Connexion = ({userconnection}) => {
  const [isPasswordHide, setPasswordHide] = useState(false);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
const navigate = useNavigate();
  let formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordHide = () => {
    setPasswordHide(!isPasswordHide);
    const input = document.querySelector(".password");

    if (isPasswordHide) {
      input.type = "password";
    } else {
      input.type = "text";
    }
  };


  const handleUserConnection = () => {
    userconnection();
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    // Valider les données du formulaire
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez Saisir votre adresse mail et mot de passe.",
      });
      setError("Veuillez Saisir votre adresse mail et mot de passe.");
      return;
    }

    // Soumettre les données du formulaire (ici vous pouvez appeler votre fonction fetch ou axios pour envoyer les données au serveur)
    console.log("Email:", email);
    console.log("Password:", password);
    const newFormData = new FormData();
    newFormData.append("USER_EMAIL",email);
    newFormData.append("USER_PASSWORD",password);

    const response =  new Promise((resolve,reject)=>{
       const data = userLogin(newFormData);
       resolve(data);
    }) 

    response.then((resp) => {
      if(resp){
        console.log(resp); // Utilisez les données ici
        localStorage.setItem("token",resp.data.token);
        localStorage.setItem("CurrentUser",JSON.stringify(resp.data));
  
        console.log("localStore Token", localStorage.getItem('token'))
        console.log("localStore CurrentUser", JSON.parse(localStorage.getItem('CurrentUser')))
        handleUserConnection()
        navigate('app/dashboard/',{ replace: false });
      }

    }).catch((error) => {
      console.error(error); // Gérez les erreurs ici
    });

    // console.log(response);

    // Réinitialiser le formulaire
    //form.reset();
  };

  return (
    <main className="adminConnexion">
      <div className="main_container">
        <form ref={formRef} onSubmit={handleSubmit} className="contentForm">
          <div className="contentForm__struct">
            <h1>Welcome Back</h1>
            <p className="Pmargin">Enter your credential to login</p>

            <div className="inputContainter">
              <div className="input">
                <label htmlFor="">
                  Your email <sup> *</sup>
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="">
                  Password <sup> *</sup>
                </label>
                <input
                  className="password"
                  type="password"
                  placeholder="Your password"
                  name="password"
                  onChange={handleChange}
                  required
                />

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

            <NavLink to={"/admin/createaccount"} className=" link">
              <div className="textTag textTagSimple btntextTag">
                Create Your Restaurant Account
              </div>
            </NavLink>
          </div>
        </form>
      </div>
    </main>
  );
};


const mapStateToProps = (state) => ({
  userconnection:state.userconnection,
});

const mapDispatchToProps = {
  userconnection
};


export default connect(mapStateToProps,mapDispatchToProps)(Connexion);

