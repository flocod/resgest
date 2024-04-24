import React, { useState, useEffect, useRef } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import { updateArticle, getAllCategory, getArticleById } from "../API/api";
import { getUserData,isEmpty } from "../../utils";

import Swal from "sweetalert2";

const UpdateMenus = () => {
  const [selectedInputFile, setSelectedInputFile] = useState("");
  const [categories, setCategory] = useState([]);
  const [fetchCategorieCalled, setFetchCategorieCalled] = useState(false);
  let currentCategoryID = "";

  let image1 = useRef();
  let image2 = useRef();

  const formAddMeal = useRef();

  const establishmentID = getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID;
  const handleChangeInputFileImage = (evt) => {
    evt.stopPropagation();

    let picImg = document.querySelector(`.${selectedInputFile}`);
    console.log("selectedInputFile :", selectedInputFile);
    console.log("picImg", picImg);
    if (picImg) {
      let file = evt.target.files[0];
      if (file) {
        let src = URL.createObjectURL(file);
        picImg.src = src;
        picImg.classList.add("active");
      }
    }

    setFormData({
      ...formData,
      imageFile: evt.target.files[0],
    });
  };

  const handleClickLogo_btn = () => {
    image1.current.click();
    setSelectedInputFile("logoIMG");
  };

  const handleClickCover_btn = () => {
    image2.current.click();
    setSelectedInputFile("coverIMG");
  };

  function isEmptyField(data,message) {
    Object.getOwnPropertyNames(data).forEach((elt) => {
      if (isEmpty(data[elt]) && elt !== "files") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: `${message}`,
        });
      }
    });
  }

  const [formData, setFormData] = useState({
    CATEGORY_NAME: "",
    CATEGORY_DESCRIPTION: "",
    mealName: "",
    price: "",
    category: "",
    preparationTime: "",
    description: "",
    imageFile1: "",
    imageFile2: "",
  });
  const [url, setUrl] = useState(window.location.href);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

    const form = formAddMeal.current;

    console.log("form", form);


    const formDataToSend = new FormData(form);

    const newFormData = new FormData();
    newFormData.append("ESTABLISHMENT_ID", establishmentID);
    newFormData.append("ARTICLE_ID", getIdParamFromURL(url));
    for (const [key, value] of formDataToSend.entries()) {
      switch (key) {
        case "mealName":
          newFormData.append("ARTICLE_NAME", value);
          break;
        case "price":
          newFormData.append("ARTICLE_PRICE", value);
          break;
        case "category":
          newFormData.append("ARTICLE_CATEGORY", value);
          break;
        case "preparationTime":
          newFormData.append("ARTICLE_PREPARE_TIME", value);
          break;
        case "description":
          newFormData.append("ARTICLE_DESCRIPTION", value);
          break;
        case "imageFile1":
          newFormData.append("ARTICLE_IMG_1", value);
          break;
        case "imageFile2":
          newFormData.append("ARTICLE_IMG_2", value);
          break;

        default:
          break;
      }
    }

    updateArticle(newFormData).then((resp) => {
      if (resp) {
        console.log(resp);
      }
    });

    // try {
    //   const response = await fetch("/api/add-meal", {
    //     method: "POST",
    //     body: formDataObj,
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useEffect(() => {
    const fetchCategorie_temp = async () => {
      try {
        console.log("establishmentID", establishmentID);
        getAllCategory(establishmentID).then((res) => {
          if (res) {
            setCategory(res.data);
            console.log("res", res);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchArticle = async (id) => {
      try {
        getArticleById(id).then((res) => {
          if (res) {
            console.log("res", res);

            setFormData({
              CATEGORY_NAME: res.data.CATEGORY_NAME,
              CATEGORY_DESCRIPTION: res.data.CATEGORY_DESCRIPTION,
              mealName: res.data.ARTICLE_NAME,
              price: res.data.ARTICLE_PRICE,
              category: res.data.ARTICLE_CATEGORY,
              preparationTime: res.data.ARTICLE_PREPARE_TIME,
              description: res.data.ARTICLE_DESCRIPTION,
              imageFile1: res.data.ARTICLE_IMG_1,
              imageFile2: res.data.ARTICLE_IMG_2,
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (!fetchCategorieCalled) {
      fetchCategorie_temp();
      const articleid = getIdParamFromURL(url);
      console.log(articleid);
      fetchArticle(articleid);
      setFetchCategorieCalled(true);
    }
  }, [fetchCategorieCalled, establishmentID]);

  return (
    <main className="adminConnexion dashboard AddMenu">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Update Article</div>
                  <div className="t2">Update this form</div>
                </div>
              </div>
              <div className="contentForm createaccount">
                <form
                  ref={formAddMeal}
                  onSubmit={handleSubmit}
                  className="contentForm__struct  "
                >
                  <div className="FormAddMenu__struct">
                    <div className="flexContainer inputMargin">
                      <div
                        className="inputContainter "
                        onClick={handleClickCover_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Select a picture <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                              style={
                                formData.imageFile2
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="coverIMG"
                              src={formData.imageFile2}
                              alt="couverture du restaurant"
                            />
                            <svg
                              width={28}
                              height={27}
                              viewBox="0 0 28 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                                fill="#717E91"
                              />
                              <path
                                d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div
                        className="inputContainter"
                        onClick={handleClickLogo_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Select a picture <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                              style={
                                formData.imageFile1
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="logoIMG"
                              src={formData.imageFile1}
                              alt="Logo du restaurant"
                            />
                            <svg
                              width={28}
                              height={27}
                              viewBox="0 0 28 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                                fill="#717E91"
                              />
                              <path
                                d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flexContainer">
                      <div className="inputContainter ">
                        <div className="input">
                          <label htmlFor="mealName">
                            Meal Name <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            value={formData.mealName}
                            id="mealName"
                            name="mealName"
                            type="text"
                            placeholder="Enter a meal name"
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="price">
                            Price (FCFA) <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            value={formData.price}
                            name="price"
                            id="price"
                            type="number"
                            placeholder="15 000"
                          />
                        </div>
                      </div>

                      <div className="inputContainter">
                        <div className="input">
                          <label htmlFor="category">
                            Select a category <sup>*</sup>
                          </label>
                          <select
                            onChange={handleChange}
                            value={formData.category}
                            name="category"
                            id="category"
                          >
                            {categories.map((category, index) => {

                              const currentCategoryID = formData.category;
                              console.log("currentCategoryID",currentCategoryID)
                              if (category.CATEGORY_ID === currentCategoryID) {
                             
                                return (
                                  <option
                                    key={index}
                                    value={category.CATEGORY_ID}
                                    aria-checked={true}
                                  >
                                    {category.CATEGORY_NAME}
                                  </option>
                                );
                              } else {
                              
                                return (
                                  <option
                                    key={index}
                                    value={category.CATEGORY_ID}
                                  >
                                    {category.CATEGORY_NAME}
                                  </option>
                                );
                              }
                            })}
                          </select>
                        </div>
                        <div className="input">
                          <label htmlFor="preparationTime">
                            Preparation time (in min.) <sup>*</sup>
                          </label>
                          <input
                            type="number"
                            onChange={handleChange}
                            value={formData.preparationTime}
                            name="preparationTime"
                            id="preparationTime"
                            placeholder="30"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inputContainter">
                      <div className="input inputTextarea">
                        <label htmlFor="description">
                          Meal Description<sup>*</sup>
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          cols="20"
                          onChange={handleChange}
                          value={formData.description}
                          rows="4"
                          placeholder="Enter a Meal description"
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit">Update Article</button>

                    <input
                      onChange={handleChangeInputFileImage}
                      ref={image1}
                      type="file"
                      name="imageFile1"
                      className="inputFileVal"
                    />
                    <input
                      onChange={handleChangeInputFileImage}
                      ref={image2}
                      type="file"
                      name="imageFile2"
                      className="inputFileVal"
                    />
                  </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMenus);
