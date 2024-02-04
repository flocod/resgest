import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import plat1 from "../images/Rectangle 1651.jpg";
import plat2 from "../images/Rectangle 1650.jpg";
import Panier from "../components/Panier";
import MenuTimePreparation from "../components/MenuTimePreparation";
import MenuUserView from "../components/MenuUserView";
import BtnCommand from "../components/BtnCommand";
import BagOrder from "../components/BagOrder";
import { useEffect } from "react";
import { formatNumberWith } from "../../utils";

const MenuDetails = () => {
  const [cart, setCart] = useState([]);

  const [count, setCount] = useState(0); // Initial value set to 1
  const menuPrice = 5000;

  const [amoutBasket, setAmoutBasket] = useState(0);

  const [isPanierDisplay, setIsPanierDisplay] = useState(false);

  const displayPanier = () => {
    setIsPanierDisplay(true);
  };
  const closePanier = () => {
    setIsPanierDisplay(false);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);

      setAmoutBasket(menuPrice * (count - 1));
    }
  };

  const addToCart = () => {
    if(count>0){
        const item = {
            id: Math.floor(Math.random() * 1000), // ID aléatoire
            nom: document.querySelector(".menu_title").textContent,
            qte: count,
            price: Number(document.querySelector(".price").getAttribute("value")) * count,
            time: Date.now(),
            devise: "FCFA",
          };
          const storageCart = localStorage.getItem("cart");
          if (storageCart === null) {
            localStorage.setItem("cart", JSON.stringify([item]));
            setCart([item]);
          } else {
            const currentCart = JSON.parse(storageCart);
            localStorage.setItem("cart", JSON.stringify([...currentCart, item]));
            setCart([...currentCart, item]);
          }
          console.log("LAST Value Cart", JSON.parse(localStorage.getItem("cart")));
    }
  };

  const increment = () => {
    setCount(count + 1);
    setAmoutBasket(menuPrice * (count + 1));
  };

  const fn_share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Menus | Friend's Foods restaurant",
          text: "All our menus for you, order now",
          url: window.location.href,
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => {
          console.log("Erreur de partage", error);
        });
    } else {
      console.log(`Votre système ne prend pas en charge l'API de partage Web.`);
      alert("Votre système ne prend pas en charge API de partage Web.");
    }
  };

  const addToBasket = () => {
    // Implement the logic to add to the basket
    console.log(`Added ${count} item(s) to the basket`);
  };

  useEffect(() => {
    const carrousel = document.querySelectorAll(".carrousel .img");
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      // Réinitialise l'opacité pour toutes les images
      carrousel.forEach((img) => (img.style.opacity = 0));

      // Fait passer l'opacité à 1 pour l'image suivante
      carrousel[currentIndex].style.opacity = 1;

      // Incrémente l'index en boucle
      currentIndex = (currentIndex + 1) % carrousel.length;
    }, 5000);

    return () => {
      // Nettoie l'intervalle lors du démontage du composant
      clearInterval(intervalId);
    };
  }, []); // Assurez-vous de ne déclencher cet effet qu'une seule fois

  useEffect(() => {
    const btn = document.querySelector(".addToBasket");
    if (amoutBasket === 0) {
      btn.disabled = true;
      // btn.style.background="white";
      // btn.style.color="var(--black)";
      // document.querySelector(".btn_command .ico path").style.fill="var(--black)";
      btn.style.opacity = ".3";
    } else {
      btn.disabled = false;
      btn.style.opacity = "1";
    }

    return () => {};
  }, [amoutBasket]);

  // Effet pour sauvegarder le panier dans le localStorage à chaque mise à jour
  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     console.log("cart",cart);
  //   }, [cart]);

  return (
    <main className="menuDetails">
      <div className="main_container">
        <div className="menu_img carrousel">
          <div className="img">
            <img src={plat2} alt="" />
          </div>
          <div className="img">
            <img src={plat1} alt="" />
          </div>
        </div>

        <div className="menuInfo">
          <div className="menuInfo__struct">
            <div className="actionMenuPage">
              <div onClick={fn_share} className="btn_share rounded_btn ">
                <svg
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1452 6.40814L12.5632 0.724419C11.9871 0.226857 11.0791 0.630778 11.0791 1.40369V4.3974C5.07208 4.46617 0.308838 5.67008 0.308838 11.3628C0.308838 13.6605 1.78903 15.9368 3.42521 17.1268C3.93578 17.4982 4.66345 17.0321 4.47519 16.4301C2.77948 11.0071 5.27948 9.56741 11.0791 9.48397V12.7717C11.0791 13.5458 11.9878 13.9479 12.5632 13.451L19.1452 7.76669C19.5592 7.4091 19.5597 6.76621 19.1452 6.40814Z"
                    fill="white"
                  />
                </svg>
              </div>

              <NavLink to={"/"} className="btn_close rounded_btn link">
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
              </NavLink>
            </div>

            <div className="menu_stat">
              <MenuTimePreparation time="50"></MenuTimePreparation>
              <MenuUserView views="56349"></MenuUserView>
            </div>

            <h2 className="menu_title">Grillade de porc épicée</h2>

            <div className="acountable">
              <div className="pricing">
                <span className="price" value="5000" device="FCFA">
                  {formatNumberWith(5000, " ")}
                </span>
              </div>

              <div className="form">
                <div className="input_box">
                  <div className="btnInput subtract" onClick={decrement}>
                    <svg
                      width={6}
                      height={3}
                      viewBox="0 0 6 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.57143 0.84375H0.428571C0.19192 0.84375 0 1.03967 0 1.28125V1.71875C0 1.96033 0.19192 2.15625 0.428571 2.15625H5.57143C5.80808 2.15625 6 1.96033 6 1.71875V1.28125C6 1.03967 5.80808 0.84375 5.57143 0.84375Z"
                        fill="#FF6B01"
                      />
                    </svg>
                  </div>
                  <div className="input qte">{count}</div>
                  <div className="btnInput add" onClick={increment}>
                    <svg
                      width={5}
                      height={6}
                      viewBox="0 0 5 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.64286 2.4375H3.03571V0.75C3.03571 0.54293 2.87578 0.375 2.67857 0.375H2.32143C2.12422 0.375 1.96429 0.54293 1.96429 0.75V2.4375H0.357143C0.159933 2.4375 0 2.60543 0 2.8125V3.1875C0 3.39457 0.159933 3.5625 0.357143 3.5625H1.96429V5.25C1.96429 5.45707 2.12422 5.625 2.32143 5.625H2.67857C2.87578 5.625 3.03571 5.45707 3.03571 5.25V3.5625H4.64286C4.84007 3.5625 5 3.39457 5 3.1875V2.8125C5 2.60543 4.84007 2.4375 4.64286 2.4375Z"
                        fill="#73B704"
                      />
                    </svg>
                  </div>
                </div>
                <div className="addToBasket" onClick={addToCart}>
                  Ajouter
                </div>
              </div>
            </div>

            <div className="MenuDescription">
              Délicieux et pimentée, la grillade de porc épicé est un plat qui
              marie parfaitement la tendreté de la viande de porc avec une
              explosion de saveurs épicées. La combinaison de la grille et des
              épices crée une symphonie de goûts et de textures qui ravit les
              papilles. La viande, grillée à la perfection, présente une surface
              croustillante qui contraste agréablement avec la jutosité de
              l'intérieur. L'utilisation d'épices bien choisies ajoute une
              profondeur de saveur, créant une expérience gustative équilibrée
              entre la chaleur des épices et la richesse de la viande. L'arôme
              alléchant qui s'échappe de la grillade de porc épicé éveille
              instantanément l'appétit. Que ce soit avec une marinade préalable
              ou une sauce épicée appliquée pendant la cuisson, chaque bouchée
              offre une explosion de saveurs qui peut varier du piquant subtil à
              un niveau de chaleur plus audacieux, selon les préférences
              personnelles. Ce plat est souvent apprécié lors de rassemblements
              sociaux, barbecue en plein air ou repas décontractés entre amis et
              famille. La grillade de porc épicé ne se contente pas seulement de
              satisfaire les amateurs de viande, mais elle offre également une
              expérience culinaire mémorable pour ceux qui recherchent un
              mélange unique de textures et de goûts dans chaque morceau.
            </div>
          </div>
        </div>

        <div className="main_struct"></div>
      </div>

      <Panier handleClick={displayPanier} item="05"></Panier>

      <div className="main_struct"></div>

      <BtnCommand amoutBasket={amoutBasket}></BtnCommand>

      {isPanierDisplay && (
        <>
          <BagOrder handleClick={closePanier}></BagOrder>
        </>
      )}
    </main>
  );
};

export default MenuDetails;
