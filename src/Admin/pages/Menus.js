import React, { useState, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import BtnMain from "../components/BtnMain";
import ToggleBtn from "../components/ToggleBtn";
import { getAllCategory, getAllArticlesByEstablishment,deleteArticle } from "../API/api";
import { getUserData, formaterTimestamp } from "../../utils";

import { NavLink } from "react-router-dom";

// function ToggleBtn() {
//   return (
//     <div className="statutToggle ToggleOff">
//       <span className="text">
//         <div className="off">Off</div>
//         <div className="on">On</div>
//       </span>
//       <div className="switch">
//         <div className="spanSwitch"></div>
//       </div>
//     </div>
//   );
// }

const Menus = () => {
  const [categories, setCategory] = useState([]);
  const [articles, setArticles] = useState([]);

  const ActiveCategories = [];

  const [fetchCategorieCalled, setFetchCategorieCalled] = useState(false);
  const [fetchAllArticleByEstablishment, setFetchAllArticleByEstablishment] =
    useState(false);

  const establishmentID = getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID;

  const fetchCategorie = async () => {
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

  const menusStatus = {
    activer: 1,
    desactiver: 0,
  };

  function displayArticles(articlesRES) {
    let compteur = 0; // Counter for row numbering (optional)

    return articlesRES.map((articleArray) =>
      articleArray.map((temp) => (
        <tr key={compteur++}>
          {" "}
          {/* Unique key for each row */}
          <td>{compteur + 1}</td> {/* Row number */}
          <td>
            <div className="name_menu">
              <div className="img">
                {temp.imageBase64 && (
                  <img src={temp.imageBase64} alt={temp.ARTICLE_NAME} />
                )}
              </div>
              <div className="name">{temp.ARTICLE_NAME}</div>
            </div>
          </td>
          <td>
            <ToggleBtn
              actionType="toggleMenu"
              id={temp.ARTICLE_ID}
              state={temp.ARTICLE_STATUS === 1}
            />
          </td>
          <td>{temp.CATEGORY_NAME}</td>
          <td>{temp.ARTICLE_PRICE} XAF</td>
          <td>{temp.ARTICLE_PREPARE_TIME} min.</td>
          <td>{temp.ARTICLE_VIEW}</td>
          <td>{formaterTimestamp(Number(temp.CREATEAT))}</td>
          <td>
            <div className="btnAction">
              <NavLink
                to={`./updatemenus?id=${temp.ARTICLE_ID}`}
                className="btnAction__item btnAction--edit link"
              >
                Edit
              </NavLink>
              <div onClick={handleDelete}  articleid={temp.ARTICLE_ID} className="btnAction__item btnAction--cancel">Delete</div>
            </div>
          </td>
        </tr>
      ))
    );
  }

  const getAllArticlesByEstablishment_temp = async () => {
    try {
      console.log("establishmentID", establishmentID);
      getAllArticlesByEstablishment(establishmentID).then((res) => {
        if (res) {
          setArticles(res.data);
          console.log("getAllArticlesByEstablishment", res);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e)=>{
    const articleId = e.target.getAttribute("articleid");

    const formData = new FormData();
    formData.append("ID", articleId);
  
    deleteArticle(formData).then((res) => {
      if (res) {
        console.log(res);
        fetchCategorie();
        getAllArticlesByEstablishment_temp();
      }
    });
  }

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

    const getAllArticlesByEstablishment_temp = async () => {
      try {
        console.log("establishmentID", establishmentID);
        getAllArticlesByEstablishment(establishmentID).then((res) => {
          if (res) {
            setArticles(res.data);
            console.log("getAllArticlesByEstablishment", res);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (!fetchCategorieCalled) {
      fetchCategorie_temp();
      getAllArticlesByEstablishment_temp();
      setFetchCategorieCalled(true);
    }
  }, [fetchCategorieCalled, establishmentID]);

  return (
    <main className="adminConnexion dashboard ">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>
          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Menus</div>
                  <div className="t2">
                    Here you can add, update or delete a meal
                  </div>
                </div>

                <BtnMain
                  to="/admin/app/menus/addmenus"
                  text="+ Add a meal"
                ></BtnMain>
              </div>

              <div className="section section4 sectionMenulist">
                <div className="orderTab">
                  <div className="head_statItem">
                    <span className="title">Menu list </span>

                    <div className="searchMeal">
                      <input
                        type="text"
                        placeholder="Find a meal"
                        className="search"
                      />
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.4697 21.5303C21.7626 21.8232 22.2374 21.8232 22.5303 21.5303C22.8232 21.2374 22.8232 20.7626 22.5303 20.4697L21.4697 21.5303ZM19.0697 19.1303L21.4697 21.5303L22.5303 20.4697L20.1303 18.0697L19.0697 19.1303ZM21.55 14.4C21.55 11.0034 18.7966 8.25 15.4 8.25V9.75C17.9681 9.75 20.05 11.8319 20.05 14.4H21.55ZM15.4 8.25C12.0034 8.25 9.25 11.0034 9.25 14.4H10.75C10.75 11.8319 12.8319 9.75 15.4 9.75V8.25ZM9.25 14.4C9.25 17.7966 12.0034 20.55 15.4 20.55V19.05C12.8319 19.05 10.75 16.9681 10.75 14.4H9.25ZM15.4 20.55C18.7966 20.55 21.55 17.7966 21.55 14.4H20.05C20.05 16.9681 17.9681 19.05 15.4 19.05V20.55Z"
                          fill="#717E91"
                        />
                        <path
                          d="M2 10H7"
                          stroke="#717E91"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17H7"
                          stroke="#717E91"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 3H19"
                          stroke="#717E91"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <select name="time" id="">
                      <option value="This month">This month</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                    </select>
                  </div>

                  <div id="scroll_categories" className="categories">
                    <div className="categories_container">
                      <div className="category active">Tout</div>
                      {categories.map((category, index) => {
                        console.log(
                          "CATEGORY_ID______________:",
                          category.CATEGORY_ID
                        );

                        return category.CATEGORY_QTE > 0 &&
                          category.CATEGORY_STATUS === 1 ? (
                          <div key={index + 1} className="category">
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

                  <div className="table_container">
                    <div className="table_container__innerContainer">
                      <table className="table tableMenuList">
                        <tbody>
                          <tr className="thead">
                            <td>N°</td>
                            <td>Name</td>
                            <td>Status</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Preparation</td>
                            <td>Nber View</td>
                            <td>Date de création</td>
                            <td>Actions</td>
                          </tr>
                          {displayArticles(articles)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Menus);
