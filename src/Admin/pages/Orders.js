import React from "react";
import AsideMenu from "../components/AsideMenu";
import LiveOrder from "../components/LiveOrder";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
// import BtnMain from "../components/BtnMain";

const Orders = () => {
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
                  <div className="t1">Orders</div>
                  <div className="t2">Manage All recents and olds orders</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>
              <LiveOrder></LiveOrder>
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
