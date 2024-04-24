import React, { useState, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import ToggleBtn from "../components/ToggleBtn";
// import BtnMain from "../components/BtnMain";
import Swal from "sweetalert2";
import { createCategory, getCategoryByID, upadateCategory } from "../API/api";
import { formaterTimestamp } from "../../utils";

const UpdateCategory = () => {
  const [formData, setFormData] = useState({
    CATEGORY_NAME: "",
    CATEGORY_DESCRIPTION: "",
  });

  const [url, setUrl] = useState(window.location.href);
  const [categoryID, setCategoryID] = useState();
  const [isCategoryFetch, setCategoryFetch] = useState(false);




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const extractParamsFromURL = (url) => {
    try {
      const urlParams = new URLSearchParams(url);
      const params = {};

      // Parcourir tous les paramètres de l'URL et les stocker dans un objet
      for (const [key, value] of urlParams) {
        params[key] = value;
      }

      return params;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'extraction des paramètres de l'URL:",
        error.message
      );
      return {};
    }
  };
  const getIdParamFromURL = (url) => {
    try {
      const urlParams = new URLSearchParams(url);
      const params = {};

      // Parcourir tous les paramètres de l'URL et les stocker dans un objet
      for (const [key, value] of urlParams) {
        console.log("key, value :", key, value)
        if(key){
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

    const { CATEGORY_NAME, CATEGORY_DESCRIPTION } = formData;
    console.log("formData ========>", formData);
    // Validation des champs
    if (!CATEGORY_NAME || !CATEGORY_DESCRIPTION) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez remplir tous les champs",
      });
      return;
    }
    // const categoryID = extractParamsFromURL(url);
    // console.log(categoryID);
    // Envoi des données via fetch et FormData
    const data = new FormData();
    data.append("CATEGORY_NAME", CATEGORY_NAME);
    data.append("CATEGORY_DESCRIPTION", CATEGORY_DESCRIPTION);
    data.append("CATEGORY_ID", categoryID);
    console.log(
      "data To send ========>",
      data.forEach((e) => console.log(e))
    );



    upadateCategory(data).then((resp) => {
      if (resp) {

        console.log(resp);
      }
    });
  };


  useEffect(() => {
    const fetchCategorie = async (id) => {
      try {
        getCategoryByID(id).then((res) => {
            if(res){
              console.log("res",res);

              setFormData({
                CATEGORY_NAME: res.data.CATEGORY_NAME,
                CATEGORY_DESCRIPTION:  res.data.CATEGORY_DESCRIPTION,
              })
            }
        });
      } catch (error) {
        console.error(error);
      }
    };

    if(!isCategoryFetch){
      const categoryid = getIdParamFromURL(url);
      console.log(categoryid);
      setCategoryID(categoryid);
      fetchCategorie(categoryid);

      setCategoryFetch(true)
    }

  },[setCategoryFetch,url,isCategoryFetch]);

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
                  <div className="t1">Update Categories</div>
                  <div className="t2">Manage meal catgories</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>

              <div className="section section4 sectionMenulist">
                <div className="flex_Categories">
                  <div className="contentForm createaccount">
                    <form
                      className="contentForm__struct"
                      onSubmit={handleSubmit}
                    >
                      <div className="head_statItem">
                        <span className="title">Update a meal Category</span>
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
                              name="CATEGORY_NAME"
                              id="categoryName"
                              value={formData.CATEGORY_NAME}
                              onChange={handleChange}
                              placeholder="Enter a category name"
                            />
                          </div>

                          <div className="input inputTextarea">
                            <label htmlFor="description">
                              Description<sup>*</sup>
                            </label>
                            <textarea
                              name="CATEGORY_DESCRIPTION"
                              id="description"
                              value={formData.CATEGORY_DESCRIPTION                                        }
                              onChange={handleChange}
                              cols="20"
                              rows="4"
                              placeholder="Enter a category description"
                            ></textarea>
                          </div>
                        </div>

                        <button type="submit">Update Category</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);
