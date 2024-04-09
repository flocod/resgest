import React from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import BtnMain from "../components/BtnMain";
import MenuImg from "../images/menuItem.webp";
import ToggleBtn from "../components/ToggleBtn";

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
    
                <BtnMain to="/admin/app/menus/addmenus" text="+ Add a meal"></BtnMain>
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
                      <div className="category">Pizza</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                      <div className="category">Burger</div>
                      <div className="category">Boissons</div>
                      <div className="category">Petit-Dejeuner</div>
                      <div className="category">Patisserie</div>
                      <div className="category">Diner</div>
                      <div className="category">Grillades</div>
                    </div>
                  </div>

                  <div className="table_container">
                    <div className="table_container__innerContainer">
                    <table className="table tableMenuList">
                    <tbody>
                      <tr className="thead">
                        <td>Name</td>
                        <td>Status</td>
                        <td>Price</td>
                        <td>Preparation</td>
                        <td>Nber View</td>
                        <td>Date de création</td>
                        <td>Actions</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={false}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={false}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={false}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn state={true}></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name_menu">
                            <div className="img">
                              <img src={MenuImg} alt="MenuImg" />
                            </div>
                            <div className="name">
                              Grillades de porcs épicées
                            </div>
                          </div>
                        </td>

                        <td>
                          <ToggleBtn></ToggleBtn>
                        </td>
                        <td>5000 XAF</td>
                        <td>30 min.</td>
                        <td>5248 k</td>
                        <td>25 january 2024, 15h30</td>
                        <td>
                          {" "}
                          <div className="btnAction">
                            <div className="btnAction__item btnAction--edit">
                              Edit
                            </div>
                            <div className="btnAction__item btnAction--view">
                              View
                            </div>
                            <div className="btnAction__item  btnAction--cancel">
                              Cancel
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
