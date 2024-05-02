import React, { useState, useEffect } from "react";
import perper from "../../menuApp/images/3D Food Icon by perper.webp";
import PanierItem from "./PanierItem";
import BtnCommand from "./BtnCommand";
import { formatNumberWith } from "../../utils";
import { useNavigate } from "react-router-dom";

const BagOrder = (props) => {

  const navigate  = useNavigate();

  const ischeckoutPage =  () => window.location.href.includes("checkout");

  let initAmoutBasket = 0;

  const readCard =localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart")) : [];

  const [cart, setCart] = useState([...readCard]);

  let amoutBasket = 0;

  if (cart) {
    cart.map(
      (item) => (initAmoutBasket = initAmoutBasket + Number(item.price))
    );
  }

  amoutBasket = initAmoutBasket;

  
  const getEstablishmentLink_Name = () => {
    // Try to get the link from local storage
    let link;
    const data = localStorage.getItem("currentEstablishmentData");
    if (data) {
      const parsedData = JSON.parse(data);
      link = parsedData?.currentEstablishment?.ESTABLISHMENT_LINK || 0;
    }
    return link
  };


 const  handleClick = ()=>{
  let link;
  const data = localStorage.getItem("currentEstablishmentData");

  if (data) {
    const parsedData = JSON.parse(data);
    console.log("parsedData",parsedData);
    link = parsedData?.currentEstablishment?.ESTABLISHMENT_LINK || 0;
  }
    if (window.location.href.includes("checkout")) navigate(`/${link}/checkout`) ;
 }


  const estLinkName = getEstablishmentLink_Name();

  // Fonction pour supprimer un élément du panier
  const removeFromCart = (itemId) => {
    if (cart) {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify([...updatedCart]));
      setCart([...updatedCart])
    }
  };

  useEffect(() => {

    return () => {
        
    };
  }, [cart]);


  return (
    <div className="panierBox">
      <div className="panierBox__struct">
        <img className="perper" src={perper} alt={perper} />
        <h2>Votre Panier</h2>
        <h4>
          <b>{cart ? cart.length : 0}</b> élémént(s)
        </h4>

        <div className="BoxTotal">
          <div className="text1">Montant Total</div>
          <div className="value" devise="FCFA">
            {formatNumberWith(amoutBasket, ",")}
          </div>
        </div>

        {/* Exemple d'utilisation du composant dans une autre partie de l'application */}
        {/* <button onClick={() => addToCart({ id: 1, name: "Produit 1" })}>
          Ajouter au panier
        </button> */}
      </div>

      <div className="panierList">
        <div className="panierList__struct">
          {/* <PanierItem
            id="1"
            item={"2"}
            name="Grillade de porc épicée Grillade de porc épicée Grillade de porc épicée"
            price="10000"
            handleClick={removeFromCart}
          ></PanierItem> */}

          {cart &&
            cart.map((item, index) => (
              <PanierItem
                key={index}
                id={item.id}
                item={item.qte}
                name={item.nom}
                price={item.price}
                handleClick={removeFromCart}
              ></PanierItem>
            ))}
          {cart && cart.length > 0 ? "" : "Votre Panier est vide"}
        </div>
      </div>

      <BtnCommand isCheckoutPage={ischeckoutPage} isFromBagOrder="true" handleClick={props.handleClick} to={`/${estLinkName}/checkout`} amoutBasket={amoutBasket}></BtnCommand>

      <div
        className="btn_close rounded_btn btn_close_panier link"
        onClick={props.handleClick}
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0327 8L15.5814 3.45136C16.1395 2.89318 16.1395 1.98818 15.5814 1.42955L14.5705 0.418636C14.0123 -0.139545 13.1073 -0.139545 12.5486 0.418636L8 4.96727L3.45136 0.418636C2.89318 -0.139545 1.98818 -0.139545 1.42955 0.418636L0.418636 1.42955C-0.139545 1.98773 -0.139545 2.89273 0.418636 3.45136L4.96727 8L0.418636 12.5486C-0.139545 13.1068 -0.139545 14.0118 0.418636 14.5705L1.42955 15.5814C1.98773 16.1395 2.89318 16.1395 3.45136 15.5814L8 11.0327L12.5486 15.5814C13.1068 16.1395 14.0123 16.1395 14.5705 15.5814L15.5814 14.5705C16.1395 14.0123 16.1395 13.1073 15.5814 12.5486L11.0327 8Z"
            fill="#FF6B01"
          />
        </svg>
      </div>
    </div>
  );
};

export default BagOrder;
