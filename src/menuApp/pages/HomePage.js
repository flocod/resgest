import { React, useState, useRef } from "react";

import plat1 from "../images/Rectangle 1651.jpg";
import plat2 from "../images/Rectangle 1652.jpg";
import plat3 from "../images/Rectangle 1650.jpg";
import banner from "../images/3D Food Icon by @OdafeUI.png";
import aboutImg from "../images/about.png";
import BtnRead from "../components/BtnRead";
import Panier from "../components/Panier";
import MenuItem from "../components/MenuItem";
import BagOrder from "../components/BagOrder";

const HomePage = () => {
  const [isAbout, setIsAbout] = useState(false);
  const [isPanierDisplay, setIsPanierDisplay] = useState(false);

  const handleClick = () => {
    setIsAbout(true);
  };
  const displayPanier = () => {
    setIsPanierDisplay(true);
  };
  const closePanier = () => {
    setIsPanierDisplay(false);
  };



  const aboutDiv = useRef();

  const readPlus = () => {
    console.log("aboutDiv.current", aboutDiv.current);

    const about = aboutDiv.current;
    about.querySelector(".aboutStruct").style =
      "width:100%; padding-bottom:10vh";
    about.querySelector(".aboutStruct .aboutText p").style = "display:block";
    about.querySelector(".aboutStruct .aboutImg").style =
      "border-radius: 0px 0px 27px 27px !important";
    about.style = `
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    `;

    about.querySelector(".btnRead").style = "display:none";
  };

  const handlePlus = () => {
    readPlus();
  };

  const MyPopup = (props) => {
    return (
      <div ref={aboutDiv} className="AboutResto">
        <div className="layerOff" onClick={props.onClose}></div>
        <div className="aboutStruct">
          <div className="aboutImg">
            <img src={aboutImg} alt="i" />
          </div>

          <div className="aboutText">
            <div className="aboutText__struct">
              <h2>Friend's Food Restaurant</h2>
              <p>
                Le nouveau local Friend's Food Bonamoussadi est situé au
                carrefour JC, en face de la station neptune, collé à Axa
                Assurance. Pour passer du temps avec vos amis après le travail
                et savourer des plats savoureux, rendez-vous au restaurant
                Friend’s Food, Bonamoussadi tenu par l’illustre Chef Stephane
                Nounamo. Ici, ils servent des grillades incroyables, sont
                spécialisés en roulade mixte et ont un barbecue qui améliorera
                la qualité du temps, que vous passerez avec vos amis après le
                travail. Le comportement et le service du personnel sont assez
                corrects et leurs grillades sont vraiment délicieux, ce qui vous
                incitera à visiter cet endroit encore et encore. Pour extraire
                le meilleur de cet endroit, ne manquez pas leurs hamburgers,
                leurs frites, leurs grillades, leurs saucisses grillées, leurs
                steaks, leurs roulades mixtes et leurs menus composés tel que le
                fameux Hawaï ou le Tel-Aviv 1/2 et plusieurs autres plats. La
                terrasse, que vous trouverez ici, vous permettra de vous
                détendre et de passer du bon temps avec vos amis ou en couple.
                Venez donc au Friend's Food à Bonamoussadi dans Douala, et
                dégustez des grillades savoureuses, dont vous vous souviendrez
                longtemps.
                <br />
                Le nouveau local Friend's Food Bonamoussadi est situé au
                carrefour JC, en face de la station neptune, collé à Axa
                Assurance. Pour passer du temps avec vos amis après le travail
                et savourer des plats savoureux, rendez-vous au restaurant
                Friend’s Food, Bonamoussadi tenu par l’illustre Chef Stephane
                Nounamo. Ici, ils servent des grillades incroyables, sont
                spécialisés en roulade mixte et ont un barbecue qui améliorera
                la qualité du temps, que vous passerez avec vos amis après le
                travail. Le comportement et le service du personnel sont assez
                corrects et leurs grillades sont vraiment délicieux, ce qui vous
                incitera à visiter cet endroit encore et encore. Pour extraire
                le meilleur de cet endroit, ne manquez pas leurs hamburgers,
                leurs frites, leurs grillades, leurs saucisses grillées, leurs
                steaks, leurs roulades mixtes et leurs menus composés tel que le
                fameux Hawaï ou le Tel-Aviv 1/2 et plusieurs autres plats. La
                terrasse, que vous trouverez ici, vous permettra de vous
                détendre et de passer du bon temps avec vos amis ou en couple.
                Venez donc au Friend's Food à Bonamoussadi dans Douala, et
                dégustez des grillades savoureuses, dont vous vous souviendrez
                longtemps. Le nouveau local Friend's Food Bonamoussadi est situé
                au carrefour JC, en face de la station neptune, collé à Axa
                Assurance. Pour passer du temps avec vos amis après le travail
                et savourer des plats savoureux, rendez-vous au restaurant
                Friend’s Food, Bonamoussadi tenu par l’illustre Chef Stephane
                Nounamo. Ici, ils servent des grillades incroyables, sont
                spécialisés en roulade mixte et ont un barbecue qui améliorera
                la qualité du temps, que vous passerez avec vos amis après le
                travail. Le comportement et le service du personnel sont assez
                corrects et leurs grillades sont vraiment délicieux, ce qui vous
                incitera à visiter cet endroit encore et encore. Pour extraire
                le meilleur de cet endroit, ne manquez pas leurs hamburgers,
                leurs frites, leurs grillades, leurs saucisses grillées, leurs
                steaks, leurs roulades mixtes et leurs menus composés tel que le
                fameux Hawaï ou le Tel-Aviv 1/2 et plusieurs autres plats. La
                terrasse, que vous trouverez ici, vous permettra de vous
                détendre et de passer du bon temps avec vos amis ou en couple.
                Venez donc au Friend's Food à Bonamoussadi dans Douala, et
                dégustez des grillades savoureuses, dont vous vous souviendrez
                longtemps.
              </p>
              {/* <button onClick={props.onClose}>Close Popup</button> */}
              <div className="btn_read">
                <BtnRead action={handlePlus}> </BtnRead>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded_btn btn_close action_close" onClick={props.onClose}>
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

  return (
    <main>
      <div className="main_container">
        <div className="main_struct">
          <div className="welcome_side">
            <div className="g1">
              <span className="t1">Bienvenue Chez</span>
              <span className="openTag close">
                <span className="ico">
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25415 4.67505V6.54588C1.25415 8.41672 2.00415 9.16672 3.87498 9.16672H6.12082C7.99165 9.16672 8.74165 8.41672 8.74165 6.54588V4.67505"
                      stroke="#73B704"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.00024 4.99992C5.76274 4.99992 6.32524 4.37909 6.25024 3.61659L5.97524 0.833252H4.02941L3.75024 3.61659C3.67524 4.37909 4.23774 4.99992 5.00024 4.99992Z"
                      stroke="#73B704"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.62921 4.99992C8.47087 4.99992 9.08754 4.31659 9.00421 3.47909L8.88754 2.33325C8.73754 1.24992 8.32087 0.833252 7.22921 0.833252H5.95837L6.25004 3.75409C6.32087 4.44159 6.94171 4.99992 7.62921 4.99992Z"
                      stroke="#73B704"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.3502 4.99992C3.0377 4.99992 3.65853 4.44159 3.7252 3.75409L3.81686 2.83325L4.01686 0.833252H2.74603C1.65436 0.833252 1.2377 1.24992 1.0877 2.33325L0.975195 3.47909C0.891862 4.31659 1.50853 4.99992 2.3502 4.99992Z"
                      stroke="#73B704"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.00004 7.08325C4.30421 7.08325 3.95837 7.42909 3.95837 8.12492V9.16659H6.04171V8.12492C6.04171 7.42909 5.69587 7.08325 5.00004 7.08325Z"
                      stroke="#73B704"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="dot" />
                <span className="text">Fermé</span>
              </span>
            </div>
            <h1 className="resto_name">Friend’s Foods Restaurant</h1>
            <div className="bar_action">
              <a href="tel:682050213" className="call">
                <div className="struct">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7312 11.4562C13.7312 11.6812 13.6812 11.9125 13.575 12.1375C13.4687 12.3625 13.3313 12.575 13.15 12.775C12.8438 13.1125 12.5062 13.3563 12.125 13.5125C11.75 13.6688 11.3438 13.75 10.9063 13.75C10.2688 13.75 9.5875 13.6 8.86875 13.2938C8.15 12.9875 7.43125 12.575 6.71875 12.0563C6 11.5313 5.31875 10.95 4.66875 10.3062C4.025 9.65625 3.44375 8.975 2.925 8.2625C2.4125 7.55 2 6.8375 1.7 6.13125C1.4 5.41875 1.25 4.7375 1.25 4.0875C1.25 3.6625 1.325 3.25625 1.475 2.88125C1.625 2.5 1.8625 2.15 2.19375 1.8375C2.59375 1.44375 3.03125 1.25 3.49375 1.25C3.66875 1.25 3.84375 1.2875 4 1.3625C4.1625 1.4375 4.30625 1.55 4.41875 1.7125L5.86875 3.75625C5.98125 3.9125 6.0625 4.05625 6.11875 4.19375C6.175 4.325 6.20625 4.45625 6.20625 4.575C6.20625 4.725 6.1625 4.875 6.075 5.01875C5.99375 5.1625 5.875 5.3125 5.725 5.4625L5.25 5.95625C5.18125 6.025 5.15 6.10625 5.15 6.20625C5.15 6.25625 5.15625 6.3 5.16875 6.35C5.1875 6.4 5.20625 6.4375 5.21875 6.475C5.33125 6.68125 5.525 6.95 5.8 7.275C6.08125 7.6 6.38125 7.93125 6.70625 8.2625C7.04375 8.59375 7.36875 8.9 7.7 9.18125C8.025 9.45625 8.29375 9.64375 8.50625 9.75625C8.5375 9.76875 8.575 9.7875 8.61875 9.80625C8.66875 9.825 8.71875 9.83125 8.775 9.83125C8.88125 9.83125 8.9625 9.79375 9.03125 9.725L9.50625 9.25625C9.6625 9.1 9.8125 8.98125 9.95625 8.90625C10.1 8.81875 10.2437 8.775 10.4 8.775C10.5187 8.775 10.6438 8.8 10.7812 8.85625C10.9187 8.9125 11.0625 8.99375 11.2188 9.1L13.2875 10.5687C13.45 10.6812 13.5625 10.8125 13.6312 10.9687C13.6937 11.125 13.7312 11.2812 13.7312 11.4562Z"
                      stroke="#E7F4D1"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M11.5625 5.625C11.5625 5.25 11.2687 4.675 10.8312 4.20625C10.4312 3.775 9.9 3.4375 9.375 3.4375"
                      stroke="#E7F4D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.75 5.625C13.75 3.20625 11.7937 1.25 9.375 1.25"
                      stroke="#E7F4D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/wSNPefWW8voz3mE69"
                target="_blank"
                className="location"
                rel="noreferrer"
              >
                <svg
                  className="ico"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50005 8.39365C8.577 8.39365 9.45005 7.52061 9.45005 6.44365C9.45005 5.3667 8.577 4.49365 7.50005 4.49365C6.42309 4.49365 5.55005 5.3667 5.55005 6.44365C5.55005 7.52061 6.42309 8.39365 7.50005 8.39365Z"
                    stroke="#73B704"
                  />
                  <path
                    d="M2.26244 5.30625C3.49369 -0.106249 11.5124 -0.0999984 12.7374 5.3125C13.4562 8.4875 11.4812 11.175 9.74994 12.8375C8.49369 14.05 6.50619 14.05 5.24369 12.8375C3.51869 11.175 1.54369 8.48125 2.26244 5.30625Z"
                    stroke="#73B704"
                  />
                </svg>
                <div className="text">
                  carrefour JC, en face de la station neptune, collé à Axa
                  Assurance
                </div>
              </a>
              <div onClick={handleClick} className="info">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 13.75C10.9375 13.75 13.75 10.9375 13.75 7.5C13.75 4.0625 10.9375 1.25 7.5 1.25C4.0625 1.25 1.25 4.0625 1.25 7.5C1.25 10.9375 4.0625 13.75 7.5 13.75Z"
                    stroke="#73B704"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 5V8.125"
                    stroke="#73B704"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.49634 10H7.50195"
                    stroke="#73B704"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bar_search">
            <img
              className="image_3d"
              src={banner}
              alt="3D Food Icon by @OdafeUI"
            />
            <div className="input_search">
              <div className="input_search_containt">
                <input
                  type="text"
                  placeholder="Que voulez-vous mangez aujourd'hui"
                />
                <button className="ico">
                  <svg
                    width={19}
                    height={19}
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.10421 16.6249C13.2578 16.6249 16.625 13.2577 16.625 9.10409C16.625 4.95044 13.2578 1.58325 9.10421 1.58325C4.95057 1.58325 1.58337 4.95044 1.58337 9.10409C1.58337 13.2577 4.95057 16.6249 9.10421 16.6249Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.4167 17.4166L15.8334 15.8333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <h2 class="part_title">Catégories</h2> */}
          {/* end main struct */}
        </div>
        <div id="scroll_categories" className="categories">
          <div className="categories_container">
            <div className="category active">Tout</div>
            <div className="category">Pizza</div>
            <div className="category">Burger</div>
            <div className="category">Boissons</div>
            <div className="category">Petit-Dejeuner</div>
            <div className="category">Patisserie</div>
            <div className="category">Diner</div>
            <div className="category">Grillades</div>
          </div>
        </div>
        <div className="main_struct">
          <div className="menu_list">
            <MenuItem
            id="1"
              nom="Grillade de porc épicée"
              descr="Délicieux et pimentée, la grillade de porc épicé est un plat qui
            marie parfaitement la tendreté de la viande de porc avec une
            explosion de saveurs épicées. La combinaison de la grille et des
            épices crée une symphonie de goûts et de textures qui ravit les
            papilles."
              price="5000"
              image={plat1}
              time="20"
              views="56856"
              devise="FCFA"
            ></MenuItem>
            <MenuItem
            id="2"
              nom="Grillade de porc épicée"
              descr="Délicieux et pimentée, la grillade de porc épicé est un plat qui
            marie parfaitement la tendreté de la viande de porc avec une
            explosion de saveurs épicées. La combinaison de la grille et des
            épices crée une symphonie de goûts et de textures qui ravit les
            papilles."
              price="5000"
              image={plat3}
              time="20"
              views="56856"
              devise="FCFA"
            ></MenuItem>
            <MenuItem
            id="3"
              nom="Grillade de porc épicée"
              descr="Délicieux et pimentée, la grillade de porc épicé est un plat qui
            marie parfaitement la tendreté de la viande de porc avec une
            explosion de saveurs épicées. La combinaison de la grille et des
            épices crée une symphonie de goûts et de textures qui ravit les
            papilles."
              price="5000"
              image={plat2}
              time="20"
              views="56856"
              devise="FCFA"
            ></MenuItem>
            <MenuItem
            id="4"
              nom="Grillade de porc épicée"
              descr="Délicieux et pimentée, la grillade de porc épicé est un plat qui
            marie parfaitement la tendreté de la viande de porc avec une
            explosion de saveurs épicées. La combinaison de la grille et des
            épices crée une symphonie de goûts et de textures qui ravit les
            papilles."
              price="5000"
              image={plat3}
              time="20"
              views="56856"
              devise="FCFA"
            ></MenuItem>
          </div>
          <div className="center_container">
            <div className="btn">
              <span className="text">Voir + </span>
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.45 5.59375L8.37505 9.66875C7.8938 10.15 7.1063 10.15 6.62505 9.66875L2.55005 5.59375"
                  stroke="#FF6B01"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

       
      </div>
      <div className="table_box">table 01</div>
      <Panier handleClick={displayPanier} item="05"></Panier>

      <div className="main_struct">
        {isAbout && (
          <>
            <MyPopup onClose={() => setIsAbout(false)} />
          </>
        )}
      </div>

{isPanierDisplay && (
  <>
  <BagOrder  handleClick={closePanier} ></BagOrder>
  </>
)}

     


     

    </main>
  );
};

export default HomePage;
