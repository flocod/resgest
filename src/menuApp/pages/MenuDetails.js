import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import plat1 from "../images/Rectangle 1651.webp";
import plat2 from "../images/Rectangle 1650.webp";
import Panier from "../components/Panier";
import MenuTimePreparation from "../components/MenuTimePreparation";
import MenuUserView from "../components/MenuUserView";
import BtnCommand from "../components/BtnCommand";
import BagOrder from "../components/BagOrder";
import { useEffect } from "react";
import { formatNumberWith } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getArticleById, incrementArticleView } from "../../Admin/API/api";
import Swal from "sweetalert2";

const MenuDetails = () => {
  const [cart, setCart] = useState([]);

  const [count, setCount] = useState(0); // Initial value set to 1
  const menuPrice = 5000;

  const [amoutBasket, setAmoutBasket] = useState(0);

  const [isPanierDisplay, setIsPanierDisplay] = useState(false);

  const [currentArticle, setCurrentArticle] = useState(false);

  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasLoadedData, setHasLoadedData] = useState(false); // Nouvelle variable d'état

  const [hasIncrement, setHasIncrement] = useState(false); // Nouvelle variable d'état

  // const [isEstablishmentLoad, setEstablishmentLoad] = useState(localStorage.getItem('currentEstablishmentData') ? true : false);

  const navigate = useNavigate();

  // const location = useLocation();
  // const isFromHome = location.state?.isFromHome; // Check for optional property

  const [establishment_URL, article_ID] =
    window.location.href.split("/details/");
  const establishment_link_path = establishment_URL.split("/").pop();

  console.log("establishment_link_path ===>", establishment_link_path);

  const url = window.location.href;
  const parsedURL = new URL(url);
  const queryString = parsedURL.search;

  const queryStringParams = new URLSearchParams(queryString); // Creates a URLSearchParams object
  const isFromHome = queryStringParams.get("prev") === "true"; // Access the 'prev' parameter value

  console.log("isFromHome", isFromHome);
  console.log("isFromHome", isFromHome);
  console.log("isFromHome", isFromHome);
  console.log("isFromHome", isFromHome);

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
    if (count > 0) {
      const item = {
        id: Math.floor(Math.random() * 1000), // ID aléatoire
        nom: document.querySelector(".menu_title").textContent,
        qte: count,
        price:
          Number(document.querySelector(".price").getAttribute("value")) *
          count,
        time: Number(document.querySelector(".menu_title").getAttribute("MenuTimePreparation")),
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
      Swal.fire({
        icon: "warning",
        title: "info",
        text: `Votre système ne prend pas en charge API de partage Web.`,
      });
    }
  };

  function handleNavigation() {
    const someStateData = {
      message: "Hello from previous page!",
      isFromHome: isFromHome,
    };
    const [establishment_URL, article_ID] =
      window.location.href.split("/details/");
    const establishment_link_path = establishment_URL.split("/").pop();

    try {
      if (isFromHome) {
        // console.log("Go Back With :  window.history.back(); ");
        // window.history.back();

        console.log(`Go Back With :   navigate(/${establishment_link_path}, {
          state: someStateData, // Pass data to destination component
        });`);
        navigate(`/${establishment_link_path}`, {
          state: someStateData, // Pass data to destination component
        });
      } else {
        console.log(`Go Back With :   navigate(/${establishment_link_path}, {
          state: someStateData, // Pass data to destination component
        });`);
        navigate(`/${establishment_link_path}`, {
          state: someStateData, // Pass data to destination component
        });
      }
    } catch (error) {
      navigate(`/${establishment_link_path}`);
    }
  }

  const handleClose = () => {
    handleNavigation();
  };

  useEffect(() => {
    const fn_getArticleById = async () => {
      setIsLoading(true);

      const [establishment_URL, article_ID] =
        window.location.href.split("/details/");
      const establishment_link_path = establishment_URL.split("/").pop();

      const id = article_ID.split("?").shift();
      console.log("article_ID", id);

      try {
        await getArticleById(id).then((res) => {
          if (res.reponse === 1) {
            console.log("Result :", res);
            setCurrentArticle(res.data);

            setIsLoading(false);
            setIsLoad(true);
            setHasLoadedData(true);
          } else {
            Swal.fire({
              icon: "question",
              title: "Error",
              text: res.message,
            });
            setError(res.message);
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.error("Error fetching establishment data:", error);
        setError(error.message);
      }
    };

    if (!currentArticle) {
      fn_getArticleById();
    }

    return () => {};
  }, [currentArticle, hasIncrement, article_ID]); // Assurez-vous de ne déclencher cet effet qu'une seule fois

  useEffect(() => {
    if (isLoad) {
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
    }

    return () => {};
  }, [amoutBasket, isLoad]);

  useEffect(() => {
    let intervalId = 0;

    const handleCarousel = () => {
      let currentIndex = 0;
      const carrousel = document.querySelectorAll(".carrousel .img");
      intervalId = setInterval(() => {
        // Reset opacity for all images
        carrousel.forEach((img) => (img.style.opacity = 0));

        // Set opacity to 1 for the current image
        carrousel[currentIndex].style.opacity = 1;

        // Increment index in a loop
        currentIndex = (currentIndex + 1) % carrousel.length;
      }, 5000);
    };

    // Call the function to handle carousel logic
    if (isLoad) {
      handleCarousel();
    }

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [isLoad]);

  // useEffect(() => {
  //   const fn_incrementArticleView = async ()=>{
  //     console.log("article_ID +++++++++ ", article_ID);

  //     const [id, rest] = article_ID.split('?')

  //       try {
  //         await incrementArticleView(id).then((res)=>{
  //             if(res && res.reponse){
  //               console.log(res.message);
  //             }else{
  //               console.log(res.message);
  //             }
  //         })
  //       } catch (error) {
  //         console.log(error)
  //       }
  //   }
  //   if (!hasIncrement) {
  //     fn_incrementArticleView();
  //     setHasIncrement(true);
  //   }
  // }, [hasIncrement,article_ID]);

  // Effet pour sauvegarder le panier dans le localStorage à chaque mise à jour
  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     console.log("cart",cart);
  //   }, [cart]);

  return (
    <main className="menuDetails">
      {hasLoadedData && (
        <>
          {" "}
          <div className="main_container">
            <div className="menu_img carrousel">
              {currentArticle.ARTICLE_IMG_1 !== "" ? (
                <div className="img">
                  <img
                    src={currentArticle.ARTICLE_IMG_1}
                    alt={currentArticle.ARTICLE_NAME}
                  />
                </div>
              ) : (
                ""
              )}
              {currentArticle.ARTICLE_IMG_2 !== "" ? (
                <div className="img">
                  <img
                    src={currentArticle.ARTICLE_IMG_2}
                    alt={currentArticle.ARTICLE_NAME}
                  />
                </div>
              ) : (
                ""
              )}
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

                  <div onClick={handleClose} className="btn_close rounded_btn">
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

                <div className="menu_stat">
                  <MenuTimePreparation
                    time={currentArticle.ARTICLE_PREPARE_TIME}
                  ></MenuTimePreparation>
                  <MenuUserView
                    views={currentArticle.ARTICLE_VIEW}
                  ></MenuUserView>
                </div>

                <h2 className="menu_title" MenuTimePreparation={currentArticle.ARTICLE_PREPARE_TIME}>{currentArticle.ARTICLE_NAME}</h2>

                <div className="acountable">
                  <div className="pricing">
                    <span
                      className="price"
                      value={currentArticle.ARTICLE_PRICE}
                      device="FCFA"
                    >
                      {formatNumberWith(
                        Number(currentArticle.ARTICLE_PRICE),
                        ","
                      )}
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

                <pre className="MenuDescription">
                  {currentArticle.ARTICLE_DESCRIPTION}
                </pre>
              </div>
            </div>

            <div className="main_struct"></div>
          </div>
          <Panier handleClick={displayPanier} item="05"></Panier>
          <div className="main_struct"></div>
          <BtnCommand
            to={`/${establishment_link_path}/checkout`}
            amoutBasket={amoutBasket}
          ></BtnCommand>
          {isPanierDisplay && (
            <>
              <BagOrder handleClick={closePanier}></BagOrder>
            </>
          )}{" "}
        </>
      )}
      {/* Afficher un message de chargement pendant le chargement des données */}
      {isLoading && <div>Loading...</div>}
      {/* Afficher un message d'erreur s'il y a eu une erreur */}
      {error && <div>Error: {error}</div>}
    </main>
  );
};

export default MenuDetails;
