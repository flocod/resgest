import React from "react";

import plat1 from "../images/Rectangle 1651.jpg";
import plat2 from "../images/Rectangle 1652.jpg";
import plat3 from "../images/Rectangle 1650.jpg";
import banner from "../images/3D Food Icon by @OdafeUI.png";



const HomePage = () => {
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
                className="location" rel="noreferrer"
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
              <div className="info">
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
            <div className="menu">
              <div className="menu_struct">
                <div className="menu_img">
                  <img src={plat1} alt="menu 1" />
                </div>
                <div className="menu_info">
                  <div className="menu_info__name">Grillade de porc épicée</div>
                  <div className="menu_info__description">
                    Délicieux et pimentée, la grillade de porc épicé est un plat
                    qui marie parfaitement la tendreté de la viande de porc avec
                    une explosion de saveurs épicées. La combinaison de la
                    grille et des épices crée une symphonie de goûts et de
                    textures qui ravit les papilles.
                  </div>
                  <div className="menu_info__price">5000 FCFA</div>
                  <div className="menu_plus">
                    <div className="menu_user_view">
                    <svg
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9275 5.18633C10.7977 2.91307 8.56103 1.375 5.99999 1.375C3.43895 1.375 1.20166 2.91414 0.0724886 5.18654C0.0248307 5.28376 0 5.39117 0 5.50011C0 5.60904 0.0248307 5.71645 0.0724886 5.81367C1.20228 8.08693 3.43895 9.625 5.99999 9.625C8.56103 9.625 10.7983 8.08586 11.9275 5.81346C11.9751 5.71624 12 5.60883 12 5.49989C12 5.39096 11.9751 5.28355 11.9275 5.18633ZM5.99999 8.59375C5.40664 8.59375 4.82663 8.4123 4.33328 8.07236C3.83993 7.73241 3.45541 7.24924 3.22835 6.68393C3.00129 6.11862 2.94188 5.49657 3.05763 4.89644C3.17339 4.29631 3.45911 3.74506 3.87867 3.31239C4.29823 2.87972 4.83277 2.58507 5.41472 2.4657C5.99666 2.34632 6.59986 2.40759 7.14804 2.64175C7.69622 2.87591 8.16475 3.27244 8.4944 3.7812C8.82404 4.28997 8.99999 4.88811 8.99999 5.5C9.00018 5.90633 8.92271 6.30872 8.77202 6.68416C8.62132 7.0596 8.40035 7.40073 8.12174 7.68805C7.84312 7.97537 7.51233 8.20325 7.14827 8.35865C6.7842 8.51406 6.39401 8.59395 5.99999 8.59375ZM5.99999 3.4375C5.82147 3.44007 5.64411 3.46746 5.4727 3.51893C5.61399 3.71694 5.6818 3.96062 5.66381 4.20577C5.64583 4.45092 5.54325 4.6813 5.37468 4.85515C5.2061 5.02899 4.9827 5.13477 4.74498 5.15332C4.50726 5.17186 4.27096 5.10194 4.07895 4.95623C3.96961 5.37165 3.98934 5.81197 4.13538 6.21522C4.28142 6.61846 4.5464 6.96433 4.89303 7.20413C5.23966 7.44394 5.65049 7.56561 6.06769 7.55202C6.48489 7.53842 6.88745 7.39026 7.21871 7.12837C7.54998 6.86648 7.79326 6.50405 7.91433 6.09211C8.03539 5.68016 8.02814 5.23943 7.89359 4.83196C7.75905 4.42449 7.50398 4.07078 7.16429 3.82063C6.8246 3.57048 6.41739 3.43649 5.99999 3.4375Z"
                            fill="#7E7E7E"
                          />
                        </svg>
                      <div className="text">
                        54221 Vues 
                      </div>
                    </div>
                    <div className="menu_preparation_time">
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 5.23242V6.74367L7.25833 7.50201"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.97913 6.50008C2.97913 4.5555 4.55538 2.97925 6.49996 2.97925C8.44454 2.97925 10.0208 4.5555 10.0208 6.50008C10.0208 7.62675 9.48996 8.63425 8.66663 9.27883H8.66121C8.06538 9.74466 7.31788 10.0209 6.49996 10.0209C5.69288 10.0209 4.95079 9.75008 4.35496 9.28966H4.34954C3.51538 8.64508 2.97913 7.63758 2.97913 6.50008Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 9.28964H4.35515C4.95098 9.75006 5.69306 10.0209 6.50015 10.0209C7.31806 10.0209 8.06556 9.74464 8.6614 9.27881H8.66681L8.39056 10.6167C8.12515 11.6459 7.52931 11.9167 6.79806 11.9167H6.20765C5.4764 11.9167 4.87515 11.6459 4.61515 10.6113L4.34973 9.28964Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 3.71034H4.35515C4.95098 3.24992 5.69306 2.97909 6.50015 2.97909C7.31806 2.97909 8.06556 3.25534 8.6614 3.72117H8.66681L8.39056 2.38325C8.12515 1.35409 7.52931 1.08325 6.79806 1.08325H6.20765C5.4764 1.08325 4.87515 1.35409 4.61515 2.38867L4.34973 3.71034Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text">
                        {" "}
                        <b>20</b> min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu_struct">
                <div className="menu_img">
                  <img src={plat2} alt="menu 1" />
                </div>
                <div className="menu_info">
                  <div className="menu_info__name">Grillade de porc épicée</div>
                  <div className="menu_info__description">
                    Délicieux et pimentée, la grillade de porc épicé est un plat
                    qui marie parfaitement la tendreté de la viande de porc avec
                    une explosion de saveurs épicées. La combinaison de la
                    grille et des épices crée une symphonie de goûts et de
                    textures qui ravit les papilles.
                  </div>
                  <div className="menu_info__price">5000 FCFA</div>
                  <div className="menu_plus">
                    <div className="menu_user_view">
                    <svg
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9275 5.18633C10.7977 2.91307 8.56103 1.375 5.99999 1.375C3.43895 1.375 1.20166 2.91414 0.0724886 5.18654C0.0248307 5.28376 0 5.39117 0 5.50011C0 5.60904 0.0248307 5.71645 0.0724886 5.81367C1.20228 8.08693 3.43895 9.625 5.99999 9.625C8.56103 9.625 10.7983 8.08586 11.9275 5.81346C11.9751 5.71624 12 5.60883 12 5.49989C12 5.39096 11.9751 5.28355 11.9275 5.18633ZM5.99999 8.59375C5.40664 8.59375 4.82663 8.4123 4.33328 8.07236C3.83993 7.73241 3.45541 7.24924 3.22835 6.68393C3.00129 6.11862 2.94188 5.49657 3.05763 4.89644C3.17339 4.29631 3.45911 3.74506 3.87867 3.31239C4.29823 2.87972 4.83277 2.58507 5.41472 2.4657C5.99666 2.34632 6.59986 2.40759 7.14804 2.64175C7.69622 2.87591 8.16475 3.27244 8.4944 3.7812C8.82404 4.28997 8.99999 4.88811 8.99999 5.5C9.00018 5.90633 8.92271 6.30872 8.77202 6.68416C8.62132 7.0596 8.40035 7.40073 8.12174 7.68805C7.84312 7.97537 7.51233 8.20325 7.14827 8.35865C6.7842 8.51406 6.39401 8.59395 5.99999 8.59375ZM5.99999 3.4375C5.82147 3.44007 5.64411 3.46746 5.4727 3.51893C5.61399 3.71694 5.6818 3.96062 5.66381 4.20577C5.64583 4.45092 5.54325 4.6813 5.37468 4.85515C5.2061 5.02899 4.9827 5.13477 4.74498 5.15332C4.50726 5.17186 4.27096 5.10194 4.07895 4.95623C3.96961 5.37165 3.98934 5.81197 4.13538 6.21522C4.28142 6.61846 4.5464 6.96433 4.89303 7.20413C5.23966 7.44394 5.65049 7.56561 6.06769 7.55202C6.48489 7.53842 6.88745 7.39026 7.21871 7.12837C7.54998 6.86648 7.79326 6.50405 7.91433 6.09211C8.03539 5.68016 8.02814 5.23943 7.89359 4.83196C7.75905 4.42449 7.50398 4.07078 7.16429 3.82063C6.8246 3.57048 6.41739 3.43649 5.99999 3.4375Z"
                            fill="#7E7E7E"
                          />
                        </svg>
                      <div className="text">
                        54221 Vues
                      </div>
                    </div>
                    <div className="menu_preparation_time">
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 5.23242V6.74367L7.25833 7.50201"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.97913 6.50008C2.97913 4.5555 4.55538 2.97925 6.49996 2.97925C8.44454 2.97925 10.0208 4.5555 10.0208 6.50008C10.0208 7.62675 9.48996 8.63425 8.66663 9.27883H8.66121C8.06538 9.74466 7.31788 10.0209 6.49996 10.0209C5.69288 10.0209 4.95079 9.75008 4.35496 9.28966H4.34954C3.51538 8.64508 2.97913 7.63758 2.97913 6.50008Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 9.28964H4.35515C4.95098 9.75006 5.69306 10.0209 6.50015 10.0209C7.31806 10.0209 8.06556 9.74464 8.6614 9.27881H8.66681L8.39056 10.6167C8.12515 11.6459 7.52931 11.9167 6.79806 11.9167H6.20765C5.4764 11.9167 4.87515 11.6459 4.61515 10.6113L4.34973 9.28964Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 3.71034H4.35515C4.95098 3.24992 5.69306 2.97909 6.50015 2.97909C7.31806 2.97909 8.06556 3.25534 8.6614 3.72117H8.66681L8.39056 2.38325C8.12515 1.35409 7.52931 1.08325 6.79806 1.08325H6.20765C5.4764 1.08325 4.87515 1.35409 4.61515 2.38867L4.34973 3.71034Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text">
                        {" "}
                        <b>20</b> min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu_struct">
                <div className="menu_img">
                  <img src={plat3} alt="menu 1" />
                </div>
                <div className="menu_info">
                  <div className="menu_info__name">Grillade de porc épicée</div>
                  <div className="menu_info__description">
                    Délicieux et pimentée, la grillade de porc épicé est un plat
                    qui marie parfaitement la tendreté de la viande de porc avec
                    une explosion de saveurs épicées. La combinaison de la
                    grille et des épices crée une symphonie de goûts et de
                    textures qui ravit les papilles.
                  </div>
                  <div className="menu_info__price">5000 FCFA</div>
                  <div className="menu_plus">
                    <div className="menu_user_view">
                    <svg
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9275 5.18633C10.7977 2.91307 8.56103 1.375 5.99999 1.375C3.43895 1.375 1.20166 2.91414 0.0724886 5.18654C0.0248307 5.28376 0 5.39117 0 5.50011C0 5.60904 0.0248307 5.71645 0.0724886 5.81367C1.20228 8.08693 3.43895 9.625 5.99999 9.625C8.56103 9.625 10.7983 8.08586 11.9275 5.81346C11.9751 5.71624 12 5.60883 12 5.49989C12 5.39096 11.9751 5.28355 11.9275 5.18633ZM5.99999 8.59375C5.40664 8.59375 4.82663 8.4123 4.33328 8.07236C3.83993 7.73241 3.45541 7.24924 3.22835 6.68393C3.00129 6.11862 2.94188 5.49657 3.05763 4.89644C3.17339 4.29631 3.45911 3.74506 3.87867 3.31239C4.29823 2.87972 4.83277 2.58507 5.41472 2.4657C5.99666 2.34632 6.59986 2.40759 7.14804 2.64175C7.69622 2.87591 8.16475 3.27244 8.4944 3.7812C8.82404 4.28997 8.99999 4.88811 8.99999 5.5C9.00018 5.90633 8.92271 6.30872 8.77202 6.68416C8.62132 7.0596 8.40035 7.40073 8.12174 7.68805C7.84312 7.97537 7.51233 8.20325 7.14827 8.35865C6.7842 8.51406 6.39401 8.59395 5.99999 8.59375ZM5.99999 3.4375C5.82147 3.44007 5.64411 3.46746 5.4727 3.51893C5.61399 3.71694 5.6818 3.96062 5.66381 4.20577C5.64583 4.45092 5.54325 4.6813 5.37468 4.85515C5.2061 5.02899 4.9827 5.13477 4.74498 5.15332C4.50726 5.17186 4.27096 5.10194 4.07895 4.95623C3.96961 5.37165 3.98934 5.81197 4.13538 6.21522C4.28142 6.61846 4.5464 6.96433 4.89303 7.20413C5.23966 7.44394 5.65049 7.56561 6.06769 7.55202C6.48489 7.53842 6.88745 7.39026 7.21871 7.12837C7.54998 6.86648 7.79326 6.50405 7.91433 6.09211C8.03539 5.68016 8.02814 5.23943 7.89359 4.83196C7.75905 4.42449 7.50398 4.07078 7.16429 3.82063C6.8246 3.57048 6.41739 3.43649 5.99999 3.4375Z"
                            fill="#7E7E7E"
                          />
                        </svg>
                      <div className="text">
                        54221 Vues
                      </div>
                    </div>
                    <div className="menu_preparation_time">
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 5.23242V6.74367L7.25833 7.50201"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.97913 6.50008C2.97913 4.5555 4.55538 2.97925 6.49996 2.97925C8.44454 2.97925 10.0208 4.5555 10.0208 6.50008C10.0208 7.62675 9.48996 8.63425 8.66663 9.27883H8.66121C8.06538 9.74466 7.31788 10.0209 6.49996 10.0209C5.69288 10.0209 4.95079 9.75008 4.35496 9.28966H4.34954C3.51538 8.64508 2.97913 7.63758 2.97913 6.50008Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 9.28964H4.35515C4.95098 9.75006 5.69306 10.0209 6.50015 10.0209C7.31806 10.0209 8.06556 9.74464 8.6614 9.27881H8.66681L8.39056 10.6167C8.12515 11.6459 7.52931 11.9167 6.79806 11.9167H6.20765C5.4764 11.9167 4.87515 11.6459 4.61515 10.6113L4.34973 9.28964Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 3.71034H4.35515C4.95098 3.24992 5.69306 2.97909 6.50015 2.97909C7.31806 2.97909 8.06556 3.25534 8.6614 3.72117H8.66681L8.39056 2.38325C8.12515 1.35409 7.52931 1.08325 6.79806 1.08325H6.20765C5.4764 1.08325 4.87515 1.35409 4.61515 2.38867L4.34973 3.71034Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text">
                        {" "}
                        <b>20</b> min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu_struct">
                <div className="menu_img">
                  <img src={plat1} alt="menu 1" />
                </div>
                <div className="menu_info">
                  <div className="menu_info__name">Grillade de porc épicée</div>
                  <div className="menu_info__description">
                    Délicieux et pimentée, la grillade de porc épicé est un plat
                    qui marie parfaitement la tendreté de la viande de porc avec
                    une explosion de saveurs épicées. La combinaison de la
                    grille et des épices crée une symphonie de goûts et de
                    textures qui ravit les papilles.
                  </div>
                  <div className="menu_info__price">5000 FCFA</div>
                  <div className="menu_plus">
                    <div className="menu_user_view">
                    <svg
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9275 5.18633C10.7977 2.91307 8.56103 1.375 5.99999 1.375C3.43895 1.375 1.20166 2.91414 0.0724886 5.18654C0.0248307 5.28376 0 5.39117 0 5.50011C0 5.60904 0.0248307 5.71645 0.0724886 5.81367C1.20228 8.08693 3.43895 9.625 5.99999 9.625C8.56103 9.625 10.7983 8.08586 11.9275 5.81346C11.9751 5.71624 12 5.60883 12 5.49989C12 5.39096 11.9751 5.28355 11.9275 5.18633ZM5.99999 8.59375C5.40664 8.59375 4.82663 8.4123 4.33328 8.07236C3.83993 7.73241 3.45541 7.24924 3.22835 6.68393C3.00129 6.11862 2.94188 5.49657 3.05763 4.89644C3.17339 4.29631 3.45911 3.74506 3.87867 3.31239C4.29823 2.87972 4.83277 2.58507 5.41472 2.4657C5.99666 2.34632 6.59986 2.40759 7.14804 2.64175C7.69622 2.87591 8.16475 3.27244 8.4944 3.7812C8.82404 4.28997 8.99999 4.88811 8.99999 5.5C9.00018 5.90633 8.92271 6.30872 8.77202 6.68416C8.62132 7.0596 8.40035 7.40073 8.12174 7.68805C7.84312 7.97537 7.51233 8.20325 7.14827 8.35865C6.7842 8.51406 6.39401 8.59395 5.99999 8.59375ZM5.99999 3.4375C5.82147 3.44007 5.64411 3.46746 5.4727 3.51893C5.61399 3.71694 5.6818 3.96062 5.66381 4.20577C5.64583 4.45092 5.54325 4.6813 5.37468 4.85515C5.2061 5.02899 4.9827 5.13477 4.74498 5.15332C4.50726 5.17186 4.27096 5.10194 4.07895 4.95623C3.96961 5.37165 3.98934 5.81197 4.13538 6.21522C4.28142 6.61846 4.5464 6.96433 4.89303 7.20413C5.23966 7.44394 5.65049 7.56561 6.06769 7.55202C6.48489 7.53842 6.88745 7.39026 7.21871 7.12837C7.54998 6.86648 7.79326 6.50405 7.91433 6.09211C8.03539 5.68016 8.02814 5.23943 7.89359 4.83196C7.75905 4.42449 7.50398 4.07078 7.16429 3.82063C6.8246 3.57048 6.41739 3.43649 5.99999 3.4375Z"
                            fill="#7E7E7E"
                          />
                        </svg>
                      <div className="text">
                        54221 Vues
                      </div>
                    </div>
                    <div className="menu_preparation_time">
                      <svg
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 5.23242V6.74367L7.25833 7.50201"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.97913 6.50008C2.97913 4.5555 4.55538 2.97925 6.49996 2.97925C8.44454 2.97925 10.0208 4.5555 10.0208 6.50008C10.0208 7.62675 9.48996 8.63425 8.66663 9.27883H8.66121C8.06538 9.74466 7.31788 10.0209 6.49996 10.0209C5.69288 10.0209 4.95079 9.75008 4.35496 9.28966H4.34954C3.51538 8.64508 2.97913 7.63758 2.97913 6.50008Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 9.28964H4.35515C4.95098 9.75006 5.69306 10.0209 6.50015 10.0209C7.31806 10.0209 8.06556 9.74464 8.6614 9.27881H8.66681L8.39056 10.6167C8.12515 11.6459 7.52931 11.9167 6.79806 11.9167H6.20765C5.4764 11.9167 4.87515 11.6459 4.61515 10.6113L4.34973 9.28964Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.34973 3.71034H4.35515C4.95098 3.24992 5.69306 2.97909 6.50015 2.97909C7.31806 2.97909 8.06556 3.25534 8.6614 3.72117H8.66681L8.39056 2.38325C8.12515 1.35409 7.52931 1.08325 6.79806 1.08325H6.20765C5.4764 1.08325 4.87515 1.35409 4.61515 2.38867L4.34973 3.71034Z"
                          stroke="#3A3A3A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text">
                        {" "}
                        <b>20</b> min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div className="panier_ico" item="07">
        <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_32_193)">
            <path
              d="M13 5.06257V5.43757C13 5.74823 12.7575 6.00007 12.4583 6.00007H12.2778L11.6884 10.2842C11.6122 10.8384 11.1551 11.2501 10.616 11.2501H2.38401C1.84489 11.2501 1.38782 10.8384 1.31156 10.2842L0.722222 6.00007H0.541667C0.242509 6.00007 0 5.74823 0 5.43757V5.06257C0 4.7519 0.242509 4.50007 0.541667 4.50007H2.06152L4.47148 1.05895C4.70609 0.72398 5.15775 0.649895 5.48036 0.893527C5.80294 1.13716 5.87426 1.60621 5.63965 1.94121L3.84757 4.50007H9.15243L7.36035 1.94118C7.12574 1.60621 7.19708 1.13714 7.51966 0.893504C7.8422 0.649871 8.29393 0.723934 8.52854 1.05893L10.9385 4.50007H12.4583C12.7575 4.50007 13 4.7519 13 5.06257ZM7.04167 9.18757V6.56257C7.04167 6.2519 6.79916 6.00007 6.5 6.00007C6.20084 6.00007 5.95833 6.2519 5.95833 6.56257V9.18757C5.95833 9.49823 6.20084 9.75007 6.5 9.75007C6.79916 9.75007 7.04167 9.49823 7.04167 9.18757ZM9.56944 9.18757V6.56257C9.56944 6.2519 9.32694 6.00007 9.02778 6.00007C8.72862 6.00007 8.48611 6.2519 8.48611 6.56257V9.18757C8.48611 9.49823 8.72862 9.75007 9.02778 9.75007C9.32694 9.75007 9.56944 9.49823 9.56944 9.18757ZM4.51389 9.18757V6.56257C4.51389 6.2519 4.27138 6.00007 3.97222 6.00007C3.67306 6.00007 3.43056 6.2519 3.43056 6.56257V9.18757C3.43056 9.49823 3.67306 9.75007 3.97222 9.75007C4.27138 9.75007 4.51389 9.49823 4.51389 9.18757Z"
              fill="#FF6B01"
            />
          </g>
          <defs>
            <clipPath id="clip0_32_193">
              <rect width={13} height={12} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default HomePage;
