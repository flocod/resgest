import React from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import ToggleBtn from "../components/ToggleBtn";
// import BtnMain from "../components/BtnMain";

const Categories = () => {
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

                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>01</td>
                              <td>Grillades</td>
                              <td>
                                <ToggleBtn state={1}></ToggleBtn>
                              </td>
                              <td>12</td>
                              <td>Contient toutes les grillades</td>
                              <td>25 sept 2023</td>
                              <td>
                                {" "}
                                <div className="btnAction">
                                  <div className="btnAction__item btnAction--edit">
                                    Edit
                                  </div>
                                  <div className="btnAction__item  btnAction--cancel">
                                    Delete
                                  </div>
                                </div>
                              </td>
                            </tr>
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
                    <form className="contentForm__struct  ">
                      <div className="head_statItem">
                        <span className="title">Add a meal Category</span>
                      </div>
                      <div className="FormAddMenu__struct">
                        <div className="inputContainter">
                          <div className="input">
                            <label htmlFor="">
                              Meal Name <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter a meal name"
                            />
                          </div>

                          <div className="input inputTextarea">
                            <label htmlFor="">
                              Description<sup>*</sup>
                            </label>
                            <textarea
                              name=""
                              id=""
                              cols="20"
                              rows="4"
                              placeholder="Enter a Meal description"
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
