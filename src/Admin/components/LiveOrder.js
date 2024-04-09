import React from "react";

const LiveOrder = (props) => {

  const param =  props.title ? props.title : 'Live Order Management';

  return (
    <div className="section section4">
      <div className="orderTab">
        <div className="head_statItem">
          <span className="title"> {param}</span>
          <select name="time" id="">
            <option value="This month">This month</option>
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
          </select>
        </div>

        <div className="table_container">
          <div className="table_container__innerContainer">

          <table className="table">
          <tbody>
            <tr className="thead">
              <td>Order ID</td>
              <td>Amount</td>
              <td>Order Status</td>
              <td>Client Info</td>
              <td>Client Table</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state pending">pending</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item  btnAction--cancel">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state sale">Sale</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state cancel">Cancel</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state sale">Sale</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state sale">Sale</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state sale">Sale</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
                    Cancel
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Order-5203</td>

              <td>25 000 XAF</td>
              <td>
                <span className="state sale">Sale</span>
              </td>
              <td>
                <div className="t1">Asaph Ndjabun</div>
                <div className="t2">697132706</div>
              </td>
              <td>Table 02</td>
              <td>25 january 2024, 15h30</td>
              <td>
                {" "}
                <div className="btnAction">
                  <div className="btnAction__item btnAction--view">View</div>
                  <div className="btnAction__item btnAction--disable">
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
  );
};

export default LiveOrder;
