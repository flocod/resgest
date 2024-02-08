import React, { useState, useEffect } from "react";
import perper from "../../menuApp/images/3D Food Icon by perper.png";
import PanierItem from "../components/PanierItem";
import BagOrder from "../components/BagOrder";
import BtnCommand from "../components/BtnCommand";
import Panier from "../components/Panier";
import { formatNumberWith } from "../../utils";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Checkout = (props) => {
  let initAmoutBasket = 0;
  const navigate = useNavigate(); // Get the useNavigate hook
  const readCard = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cart, setCart] = useState([...readCard]);

  const [isPanierDisplay, setIsPanierDisplay] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    tel: "",
    option: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Formulaire valide, soumettre les données
      console.log("Formulaire soumis");

      localStorage.setItem("formDATA", JSON.stringify(formData));
      console.log("localStorage : ",localStorage.getItem("formDATA"));

      navigate("/finalize");

    }else{
      alert(`${errors.nom} ${errors.tel} ${errors.option}`);

    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (formData) => {
    const errors = {};

    // Vérifier le nom
    if (!formData.nom) {
      errors.nom = "Le nom est obligatoire";
    } else if (formData.nom.length < 2) {
      errors.nom = "Le nom doit contenir au moins 2 caractères";
    }

    // Vérifier le téléphone
    if (!formData.tel) {
      errors.tel = "Le numéro de téléphone est obligatoire";
    } else if (!/^\d+$/.test(formData.tel)) {
      errors.tel =
        "Le numéro de téléphone doit être composé uniquement de chiffres";
    }

    // Vérifier l'option de commande
    if (!formData.option) {
      errors.option = "Veuillez choisir une option de commande";
    }

    // Retourner les erreurs
    return errors;
  };

  const displayPanier = () => {
    setIsPanierDisplay(true);
  };
  const closePanier = () => {
    setIsPanierDisplay(false);
  };

  let amoutBasket = 0;

  if (cart) {
    cart.map(
      (item) => (initAmoutBasket = initAmoutBasket + Number(item.price))
    );
  }

  amoutBasket = initAmoutBasket;

  useEffect(() => {
    return () => {};
  }, [cart]);

  return (
    <main className="menuDetails Checkout">
      <Panier handleClick={displayPanier}></Panier>

      <div className="main_struct"></div>

      {/* <BtnCommand amoutBasket={amoutBasket}></BtnCommand> */}

      <div className=" panierBox CheckoutpanierBox">
        <div className="panierBox__struct">
          <NavLink to="/">
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.7731 15.1202L8.93069 15.944C8.574 16.2929 7.99721 16.2929 7.64431 15.944L0.267522 8.73369C-0.0891741 8.38486 -0.0891741 7.8208 0.267522 7.47568L7.64431 0.261621C8.001 -0.087207 8.57779 -0.087207 8.93069 0.261621L9.7731 1.08545C10.1336 1.43799 10.126 2.01318 9.75792 2.3583L5.18538 6.61846H16.0912C16.5959 6.61846 17.0019 7.01553 17.0019 7.50908V8.69658C17.0019 9.19014 16.5959 9.58721 16.0912 9.58721H5.18538L9.75792 13.8474C10.1298 14.1925 10.1374 14.7677 9.7731 15.1202Z"
                fill="#525252"
              />
            </svg>
          </NavLink>
          <h2>Checkout</h2>
          <h4>Finalisez votre commande</h4>

          <div className="BoxTotal">
            <div className="text1">Montant Total</div>
            <div className="value" devise="FCFA">
              {formatNumberWith(amoutBasket, ",")}
            </div>
          </div>
        </div>

        <div className="panierList panierListCheckout">
          <div className="panierList__struct">
            <form className="formCheckout">
              <div className="inputBox">
                <span className="label" attr="*">
                  Nom{" "}
                </span>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                />
              </div>

              <div className="inputBox">
                <span className="label" attr="*">
                  Téléphone
                </span>
                <input
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Entrez votre téléphone"
                />
              </div>

              <div className="inputBox textareaBox">
                <span className="label" attr="">
                  Ajoutez un commentaire ?
                </span>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  cols="20"
                  rows="5"
                  placeholder="Entrez un commentaire"
                ></textarea>
              </div>

              <div className="inputBox optionOrder">
                <span className="label" attr="*">
                  Manger sur place ou emporter
                </span>

                <div className="optionOrder__struct">
                  <div className="radio">
                    <input
                      type="radio"
                      name="option"
                      id="mangez"
                      value="Manger sur place"
                      onChange={handleChange}
                    />
                    <label htmlFor="mangez">Manger sur place</label>
                  </div>
                  <div className="radio">
                    <input
                      type="radio"
                      name="option"
                      id="emportez"
                      value="Emporter"
                      onChange={handleChange}
                    />
                    <label htmlFor="emportez">Emporter</label>
                  </div>
                </div>
              </div>

              <div className="notice">
                <div className="notice__struct">
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_42_365)">
                      <path
                        d="M14.7656 7.5C14.7656 11.5136 11.5124 14.7656 7.5 14.7656C3.48759 14.7656 0.234375 11.5136 0.234375 7.5C0.234375 3.48876 3.48759 0.234375 7.5 0.234375C11.5124 0.234375 14.7656 3.48876 14.7656 7.5ZM7.5 8.96484C6.75571 8.96484 6.15234 9.56821 6.15234 10.3125C6.15234 11.0568 6.75571 11.6602 7.5 11.6602C8.24429 11.6602 8.84766 11.0568 8.84766 10.3125C8.84766 9.56821 8.24429 8.96484 7.5 8.96484ZM6.22052 4.12072L6.43784 8.1051C6.44801 8.29154 6.60217 8.4375 6.78888 8.4375H8.21112C8.39783 8.4375 8.55199 8.29154 8.56216 8.1051L8.77948 4.12072C8.79047 3.91934 8.63013 3.75 8.42845 3.75H6.57152C6.36984 3.75 6.20953 3.91934 6.22052 4.12072Z"
                        fill="#FF6B01"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_365">
                        <rect width={15} height={15} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="text">
                    Avis Important: Vérifiez Votre Commande Avant de Valider.Une
                    fois votre commande soumise, elle sera traitée
                    instantanément, et nous ne pourrons pas apporter de
                    modifications ultérieures.
                  </div>
                </div>
              </div>

              <BtnCommand
                from="checkout"
                handleClick={handleSubmit}
                to="/finalize"
                ui="greenBtn"
                amoutBasket={amoutBasket}
              ></BtnCommand>
            </form>
          </div>
        </div>
      </div>

      {isPanierDisplay && (
        <>
          <BagOrder handleClick={closePanier}></BagOrder>
        </>
      )}
    </main>
  );
};

export default Checkout;
