import React, { useState, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import ToggleBtn from "../components/ToggleBtn";
// import BtnMain from "../components/BtnMain";
import Swal from "sweetalert2";
import { createCategory, getAllCategory,deleteCategory } from "../API/api";
import { formaterTimestamp } from "../../utils";
import { NavLink } from "react-router-dom";
import { getUserData } from "../../utils";

const Categories = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
  });

  const [categories, setCategory] = useState([]);
  const [fetchCategorieCalled, setFetchCategorieCalled] = useState(false);

  const establishmentID= getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchCategorie = async () => {
    try {
      console.log("establishmentID",establishmentID)
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { categoryName, description } = formData;
    console.log("formData ========>", formData);
    // Validation des champs
    if (!categoryName || !description) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez remplir tous les champs",
      });
      return;
    }

    // Envoi des données via fetch et FormData
    const data = new FormData();
    data.append("CATEGORY_NAME", categoryName);
    data.append("CATEGORY_DESCRIPTION", description);
    data.append("ESTABLISHMENT_ID", establishmentID);
    console.log(
      "data To send ========>",
      data.forEach((e) => console.log(e))
    );

    createCategory(data).then((resp) => {
      if (resp) {
        setFormData({ categoryName: "", description: "" });
        fetchCategorie();
        console.log(resp);
      }
    });
  };


  const handleDelete = async (e)=>{
    const categoryId = e.target.getAttribute("categoryid");

    const formData = new FormData();
    formData.append("ID", categoryId);
  
    deleteCategory(formData).then((res) => {
      if (res) {
        console.log(res);
        fetchCategorie();
      }
    });
  }

  const categoryStatus = {
    activer: 1,
    desactiver: 0,
  };

  useEffect(() => {

    const fetchCategorie_temp = async () => {
      try {
        console.log("establishmentID",establishmentID)
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

    if (!fetchCategorieCalled) {
      fetchCategorie_temp();
      setFetchCategorieCalled(true);
    }
  },[fetchCategorieCalled,establishmentID]);

  return (
    <main className="adminConnexion dashboard CategoriesPage">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Categories</div>
                  <div className="t2">Manage meal catgories</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>

              <div className="section section4 sectionMenulist">
                <div className="flex_Categories">
                  <div className="orderTab">
                    <div className="head_statItem">
                      <span className="title">Categories List</span>
                      <select name="time" id="">
                        <option value="This month">This month</option>
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                      </select>
                    </div>

                    <div className="table_container">
                      <div className="table_container__innerContainer">
                        <table className="table tableMenuList">
                          <tbody>
                            <tr className="thead">
                              <td>N°</td>
                              <td>Name</td>
                              <td>Status</td>
                              <td>Total</td>
                              <td>description</td>
                              <td>create at</td>
                              <td>Actions</td>
                            </tr>

                            {categories.map((category, index) => {
                              console.log("CATEGORY_ID______________:",category.CATEGORY_ID)
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{category.CATEGORY_NAME}</td>
                                  <td>
                                    <ToggleBtn
                                      actionType={"toggleCategory"}
                                      id={category.CATEGORY_ID}
                                      state={
                                        category.CATEGORY_STATUS ===
                                        categoryStatus.activer
                                          ? true
                                          : false
                                      }
                                    ></ToggleBtn>
                                  </td>
                                  <td>{category.CATEGORY_QTE}</td>
                                  <td>{category.CATEGORY_DESCRIPTION}</td>
                                  <td>
                                    {formaterTimestamp(
                                      Number(category.CREATEAT)
                                    )}
                                  </td>
                                  <td>
                                    {" "}
                                    <div className="btnAction">
                                      <NavLink
                                      to={`./updatecategory?id=${category.CATEGORY_ID}`}
                                        categoryid={category.CATEGORY_ID}
                                        className="btnAction__item btnAction--edit link"
                                      >
                                        Edit
                                      </NavLink>

                                      {category.CATEGORY_QTE >= 1 ? (
                                        ""
                                      ) : (
                                        <div
                                        onClick={handleDelete}
                                          categoryid={category.CATEGORY_ID}
                                          className="btnAction__item  btnAction--cancel"
                                        >
                                          Delete
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
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

                  <div className="contentForm createaccount">
                    <form
                      className="contentForm__struct"
                      onSubmit={handleSubmit}
                    >
                      <div className="head_statItem">
                        <span className="title">Add a meal Category</span>
                        <div className="Pmargin"></div>
                      </div>
                      <div className="FormAddMenu__struct">
                        <div className="inputContainter">
                          <div className="input">
                            <label htmlFor="categoryName">
                              Category Name <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="categoryName"
                              id="categoryName"
                              value={formData.categoryName}
                              onChange={handleChange}
                              placeholder="Enter a category name"
                            />
                          </div>

                          <div className="input inputTextarea">
                            <label htmlFor="description">
                              Description<sup>*</sup>
                            </label>
                            <textarea
                              name="description"
                              id="description"
                              value={formData.description}
                              onChange={handleChange}
                              cols="20"
                              rows="4"
                              placeholder="Enter a category description"
                            ></textarea>
                          </div>
                        </div>

                        <button type="submit">Add Category</button>
                      </div>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
