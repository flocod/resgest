import { React, useState, useRef, useEffect } from "react";

import plat1 from "../images/Rectangle 1651.webp";
import plat2 from "../images/Rectangle 1652.webp";
import plat3 from "../images/Rectangle 1650.webp";
import banner from "../images/3D Food Icon by @OdafeUI.webp";
import aboutImg from "../images/about.webp";
import BtnRead from "../components/BtnRead";
import Panier from "../components/Panier";
import MenuItem from "../components/MenuItem";
import BagOrder from "../components/BagOrder";
import { fileDownload } from "../../Admin/API/api";
import { convertFromBase93 } from "../../utils";

import { loadEstablishment } from "../../Admin/API/api";
import { extractUrlParameters } from "../../utils";
import Swal from "sweetalert2";
import DisplayMenu from "../components/DisplayMenu";
import { useLocation } from "react-router-dom";
import MenuDetailsPop from "./MenuDetailsPop";
import { incrementArticleView } from "../../Admin/API/api";

const HomePage = () => {
  const [isAbout, setIsAbout] = useState(false);
  const [isPanierDisplay, setIsPanierDisplay] = useState(false);
  const [establishmentData, setEstablishmentData] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasLoadedData, setHasLoadedData] = useState(false); // Nouvelle variable d'état
  const [openDays, setOpenDays] = useState({}); // Nouvelle variable d'état
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false);
  const [cover, setCover] = useState(false);
  const [articles, setArticles] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [isArticleSelected, setArticleSelected] = useState(false); 
  const [selectedArticle, setSelectedArticle] = useState(false); 

  const location = useLocation();
  const checkeExistData = location.state;
  const isPreviousPageExist =
    checkeExistData && checkeExistData.isFromHome;

    console.log('location.state',location.state);
    console.log('location.state',location.state);
    console.log('location.state',location.state);
    console.log('location.state',location.state);

    const fn_incrementArticleView = async (id)=>{


      try {
        await incrementArticleView(id).then((res)=>{
            if(res && res.reponse){
              console.log(res.message);
            }else{
              console.log(res.message);
            }
        })
      } catch (error) {
        console.log(error)
      }
  }

    const handleClickArticle = async (id)=>{
      fn_incrementArticleView(id);
      setSelectedArticle(id)
    }
    const handleCloseArticle = ()=>{
      setSelectedArticle(false)
    }

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
      "border-radius: 0px 0px 27px 27px !important;width:100vw; padding-bottom:10vh; transition : 0.3s";
    about.querySelector(".aboutStruct .aboutText pre").style = "display:block";
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

  function setMenuElementsToGrid(id = "") {
    const categoryElements = document.querySelectorAll(".menu");

    if (id && id === "all") {
      const categoriesTab = document.querySelectorAll(`.category`); // Add active class to clicked button
      for (const element of categoriesTab) {
        element.classList.remove("active");
      }
      document.querySelector(`#${id}`).classList.add("active"); // Add active class to clicked button
    }

    for (const element of categoryElements) {
      element.style.display = "grid"; // Set display to 'grid'
    }
  }

  // function hideElementsWithMatchingClass(id) {
  //   setMenuElementsToGrid()
  //   const matchingClasses = document.querySelectorAll(`.${id}`);

  //   for (const element of matchingClasses) {
  //     element.style.display = 'none';
  //   }
  // }

  function hideElementsWithMatchingClass(id) {
    const menuElements = document.querySelectorAll(".menu"); // Select all elements with class 'menu'
    const categoriesTab = document.querySelectorAll(`.category`); // Add active class to clicked button
    for (const element of categoriesTab) {
      element.classList.remove("active");
    }
    document.querySelector(`#${id}`).classList.add("active"); // Add active class to clicked button
    setMenuElementsToGrid();
    for (const element of menuElements) {
      if (!element.classList.contains(id)) {
        // Check if element has class 'id'
        element.style.display = "none"; // Hide if it doesn't have class 'id'
      }
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category on click
  };

  const filteredArticles = selectedCategory
    ? articles.filter(
        (article) => article.ARTICLE_CATEGORY === selectedCategory
      )
    : articles; // Filter articles based on selected category

  const handleSearchChange = (event) => {
    if (selectedCategory != null) {
      setSelectedCategory(null);
    }

    if (event.target.value !== "") {
      document
        .querySelector(".coverContainer")
        .classList.add("coverContainerOFF");
    } else {
      document
        .querySelector(".coverContainer")
        .classList.remove("coverContainerOFF");
    }

    setSearchTerm(event.target.value.toLowerCase()); // Update search term on input change
  };

  const filteredArticlesSearch = searchTerm
    ? articles.filter((article) => {
        const searchTextLower = searchTerm.toLowerCase();
        return article.ARTICLE_NAME.toLowerCase().includes(searchTextLower);
      })
    : articles;

  const MyPopup = (props) => {
    return (
      <div ref={aboutDiv} className="AboutResto">
        <div className="layerOff" onClick={props.onClose}></div>
        <div className="aboutStruct">
          <div className="aboutImg">
            <img src={props.image} alt={props.name} />
          </div>

          <div className="aboutText">
            <div className="aboutText__struct">
              <h2 className="aboutText_name">{props.name}</h2>
              <div>
                <pre>{props.description}</pre>
              </div>
              {/* <button onClick={props.onClose}>Close Popup</button> */}
              <div className="btn_read">
                <BtnRead action={handlePlus}> </BtnRead>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded_btn btn_close action_close"
          onClick={props.onClose}
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

  const isEstablishmentOpen = (openingHours) => {
    const now = new Date();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
    // console.log("currentDay", currentDay);
    // Vérifier si l'établissement est fermé le jour actuel
    if (
      openingHours[currentDay].open === "closed" ||
      openingHours[currentDay].close === "closed"
    ) {
      return false;
    }

    // Extraire les heures d'ouverture et de fermeture du jour actuel
    const [openHour, openMinute] = openingHours[currentDay].open
      .split(":")
      .map(Number);
    const [closeHour, closeMinute] = openingHours[currentDay].close
      .split(":")
      .map(Number);

    // Créer des objets Date pour les heures d'ouverture et de fermeture
    const openTime = new Date().setHours(openHour, openMinute, 0, 0);
    const closeTime = new Date().setHours(closeHour, closeMinute, 0, 0);

    // Vérifier si l'heure actuelle est entre les heures d'ouverture et de fermeture
    return now >= openTime && now <= closeTime;
  };

  const parameters = extractUrlParameters(window.location.href);

  async function displayArticles(articlesRES) {
    const items = [];
    for (let i = 0; i < articlesRES.length; i++) {
      const articleArray = articlesRES[i];

      for (let j = 0; j < articleArray.length; j++) {
        const temp = articleArray[j];

        const imgCover = await fileDownload(temp.ARTICLE_IMG_1, "thumbnail");

        const newItem = {
          ARTICLE_ID: temp.ARTICLE_ID,
          CATEGORY_NAME: temp.CATEGORY_NAME,
          ARTICLE_NAME: temp.ARTICLE_NAME,
          ARTICLE_CATEGORY: temp.ARTICLE_CATEGORY,
          ARTICLE_DESCRIPTION: temp.ARTICLE_DESCRIPTION,
          ARTICLE_PRICE: temp.ARTICLE_PRICE,
          ARTICLE_IMG_1: imgCover,
          ARTICLE_PREPARE_TIME: temp.ARTICLE_PREPARE_TIME,
          ARTICLE_VIEW: temp.ARTICLE_VIEW,
        };
        items.push(newItem);
      }
    }
    return items;
  }

  useEffect(() => {
    const fn_loadEstablishment = async (parameter) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await loadEstablishment(parameter); // Wait for response
        if (response && response.reponse) {
          localStorage.setItem(
            "currentEstablishmentData",
            JSON.stringify(response.data)
          );
          console.log(
            JSON.parse(localStorage.getItem("currentEstablishmentData"))
          );

          const openDaysBase93 =
            response.data.currentEstablishment.ESTABLISHMENT_OPENDAYS;
          const convertOpenDays = JSON.parse(convertFromBase93(openDaysBase93));

          const establishmentLOGO =
            response.data.currentEstablishment.ESTABLISHMENT_COVER;

          const [tempArticles, imgCover] = await Promise.all([
            displayArticles(response.data.articlesArray),
            fileDownload(establishmentLOGO, "original"),
          ]);

          console.log("tempArticles =====>", tempArticles);

          setArticles(tempArticles);

          // const imgCover = await fileDownload(establishmentLOGO, "original");

          setCover(imgCover);
          setIsCurrentlyOpen(isEstablishmentOpen({ ...convertOpenDays }));
          setOpenDays({ ...convertOpenDays });

          setEstablishmentData({ ...response.data });
          console.log("res", response);
          console.log("convertOpenDays", convertOpenDays);
          setHasLoadedData(true);
          setIsLoading(false);
        } else {
          Swal.fire({
            icon: "question",
            title: "Error",
            text: response.message,
          });
          setError(response.message);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching establishment data:", error);
        setError(error.message);
      }
    };

    const fn_isPreviousPageExist = async () => {
      console.log(JSON.parse(localStorage.getItem("currentEstablishmentData")));
      const DATA_ESTABLISHMENT = JSON.parse(localStorage.getItem("currentEstablishmentData"));
      const openDaysBase93 =
        DATA_ESTABLISHMENT.currentEstablishment.ESTABLISHMENT_OPENDAYS;
      const convertOpenDays = JSON.parse(convertFromBase93(openDaysBase93));

      const establishmentCOVER =
        DATA_ESTABLISHMENT.currentEstablishment.ESTABLISHMENT_COVER;

      const [tempArticles, imgCover] = await Promise.all([
        displayArticles(DATA_ESTABLISHMENT.articlesArray),
        fileDownload(establishmentCOVER, "original"),
      ]);

      console.log("tempArticles =====>", tempArticles);
      setArticles(tempArticles);

      // const imgCover = await fileDownload(establishmentLOGO, "original");

      setCover(imgCover);
      setIsCurrentlyOpen(isEstablishmentOpen({ ...convertOpenDays }));
      setOpenDays({ ...convertOpenDays });

      setEstablishmentData({ ...DATA_ESTABLISHMENT });

      console.log("convertOpenDays", convertOpenDays);
      setHasLoadedData(true);
      setIsLoading(false);
    };

    // si on revien de la page précedente
    //isPreviousPageExist && !hasLoadedData
    if (0) {

      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')
      console.log('isPreviousPageExist')

      fn_isPreviousPageExist().then(() => {
        setIsLoad(true);
      }); // Set isLoad after successful load;
    } else {
      // Load establishment only if not already loaded
      if (!isLoad && parameters && parameters.length > 0) {
        fn_loadEstablishment(parameters[0]).then(() => {
          setIsLoad(true);
        }); // Set isLoad after successful load
      }
    }
  }, [isLoad, parameters, openDays]);

  useEffect(() => {
    let intervalId;
    // Load establishment only if not already loaded
    if (hasLoadedData && openDays) {
      intervalId = setInterval(() => {
        // console.log("openDays", openDays);
        setIsCurrentlyOpen(isEstablishmentOpen(openDays));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [hasLoadedData, openDays]);

  return (
    <main id="MainContainScroll">
      {hasLoadedData && (
        <>
          <div className="main_container">
            <div className="coverContainer">
              <img className="backgroundCover" src={cover} alt="Cover" />
              {/* <img className="backgroundCover" src={establishmentData.currentEstablishment.ESTABLISHMENT_COVER} alt="Cover" /> */}
              <div className="main_struct">
                <div className="welcome_side">
                  <div className="g1">
                    <span className="t1">Bienvenue Chez</span>
                    <span
                      className={`openTag ${
                        isCurrentlyOpen ? "open" : "close"
                      }`}
                    >
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
                      <span className="text">{`${
                        isCurrentlyOpen ? "Open" : "Closed"
                      }`}</span>
                    </span>
                  </div>
                  <h1
                    data-shadow={
                      establishmentData.currentEstablishment.ESTABLISHMENT_NAME
                    }
                    className="resto_name"
                  >
                    {establishmentData.currentEstablishment.ESTABLISHMENT_NAME}
                  </h1>
                  <div className="bar_action">
                    <a
                      href={`tel:${establishmentData.currentEstablishment.ESTABLISHMENT_PHONE}`}
                      className="call"
                    >
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
                      href={
                        establishmentData.currentEstablishment
                          .ESTABLISHMENT_LOCATION_LINK
                      }
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
                        {
                          establishmentData.currentEstablishment
                            .ESTABLISHMENT_LOCATION
                        }
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

                {/* <h2 class="part_title">Catégories</h2> */}
                {/* end main struct */}
              </div>
            </div>

            <div className="main_struct">
              <div className="bar_search">
                <div className="input_search">
                  <div className="input_search_containt">
                    <input
                      onChange={handleSearchChange}
                      type="text"
                      placeholder="Que voulez-vous mangez aujourd'hui"
                      className="home_input_search__field"
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
            </div>

            <div id="scroll_categories" className="categories">
              <div className="categories_container">
                <div
                  id="all"
                  onClick={() => setSelectedCategory(null)}
                  className={`category ${
                    selectedCategory === null ? "active" : ""
                  }`}
                >
                  Tout
                </div>
                {establishmentData.Categories.map((category, index) => {
                  console.log(
                    "CATEGORY_ID______________:",
                    category.CATEGORY_ID
                  );

                  return category.CATEGORY_QTE > 0 &&
                    category.CATEGORY_STATUS === 1 ? (
                    <div
                      key={index + 1}
                      id={category.CATEGORY_ID}
                      className={`category ${
                        selectedCategory === category.CATEGORY_ID
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        handleCategoryClick(category.CATEGORY_ID);
                      }}
                    >
                      {category.CATEGORY_NAME} (
                      {category.CATEGORY_QTE <= 9
                        ? "0" + category.CATEGORY_QTE
                        : category.CATEGORY_QTE}
                      )
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <div className="main_struct">
              {selectedCategory ? (
                <div className="menu_list">
                  {filteredArticles.map((article, index) => (
                    <MenuItem
                      handleClickArticle= {handleClickArticle} 
                      key={index + 1}
                      id={article.ARTICLE_ID}
                      categoryId={article.ARTICLE_CATEGORY}
                      nom={article.ARTICLE_NAME}
                      descr={article.ARTICLE_DESCRIPTION}
                      price={article.ARTICLE_PRICE}
                      image={article.ARTICLE_IMG_1}
                      time={article.ARTICLE_PREPARE_TIME}
                      views={Number(article.ARTICLE_VIEW)}
                      devise="FCFA"
                    />
                  ))}
                </div>
              ) : searchTerm === "" ? (
                <DisplayMenu  handleClickArticle= {handleClickArticle}  articles={articles}></DisplayMenu>
              ) : (
                <div className="menu_list">
                  {filteredArticlesSearch.length !== 0
                    ? filteredArticlesSearch.map((article, index) => (
                        <MenuItem
                          handleClickArticle= {handleClickArticle} 
                          key={index + 1}
                          id={article.ARTICLE_ID}
                          categoryId={article.ARTICLE_CATEGORY}
                          nom={article.ARTICLE_NAME}
                          descr={article.ARTICLE_DESCRIPTION}
                          price={article.ARTICLE_PRICE}
                          image={article.ARTICLE_IMG_1}
                          time={article.ARTICLE_PREPARE_TIME}
                          views={Number(article.ARTICLE_VIEW)}
                          devise="FCFA"
                        />
                      ))
                    : `Aucun resultat trouvé`}
                </div>
              )}
            </div>
          </div>
          <div className="table_box">table 01</div>
          <Panier handleClick={displayPanier} item="05"></Panier>

          <div className="main_struct">
            {isAbout && (
              <>
                <MyPopup
                  image={cover}
                  name={
                    establishmentData.currentEstablishment.ESTABLISHMENT_NAME
                  }
                  description={
                    establishmentData.currentEstablishment
                      .ESTABLISHMENT_DESCRIPTION
                  }
                  onClose={() => setIsAbout(false)}
                />
              </>
            )}
          </div>
          <div className="main_struct">
            {selectedArticle && (
              <MenuDetailsPop handleCloseArticle={handleCloseArticle} selectedArticle={selectedArticle}></MenuDetailsPop>
            )}
          </div>

          {isPanierDisplay && (
            <>
              <BagOrder handleClick={closePanier}></BagOrder>
            </>
          )}
        </>
      )}
      {/* Afficher un message de chargement pendant le chargement des données */}
      {isLoading && <div>Loading...</div>}
      {/* Afficher un message d'erreur s'il y a eu une erreur */}
      {error && <div>Error: {error}</div>}
    </main>
  );
};

export default HomePage;
