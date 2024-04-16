import React, { useEffect, useState } from "react";
import AsideMenu from "../components/AsideMenu";
import LiveOrder from "../components/LiveOrder";
import icoChief from "../images/3D Food Icon by @OdafeUI.webp";
import Bar from "../components/Bar";
import menuItem from "../images/menuItem.webp";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import {
  increment,
  userconnection,
  decrement,
  menuio,
} from "../../redux/action";

const Dashboard = ({
  count,
  USER_DATA,
  userconnection,
  isMenuActive,
  menuio,
  increment,
  decrement,
}) => {

  console.log("USER_DATA", USER_DATA);
  console.log(
    "localStore CurrentUser",
    JSON.parse(localStorage.getItem("CurrentUser"))
  );

 const userData =  JSON.parse(localStorage.getItem("CurrentUser"))
  return (
    <main className="adminConnexion dashboard" >
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>

              <div className="section section1">
                <div className="welcome">
                  <div className="img">
                    <img src={icoChief} alt="ico Chief" />
                  </div>
                  <div className="text">
                    <div className="t1">
                      <span>Welcome</span>, {userData.user.USER_SUBNAME}{" "}
                      <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8561 11.5121L18.9924 16.5046C18.1245 18.8297 17.6904 19.9922 16.9817 20.7889C15.8979 22.007 14.3371 22.7195 12.6872 22.7494C11.6083 22.7688 10.4197 22.347 8.04239 21.5034C6.79566 21.061 6.17229 20.8397 5.6387 20.5091C4.82465 20.0048 4.15199 19.3104 3.68121 18.4883C3.37263 17.9495 3.18069 17.3291 2.79681 16.0881L1.10528 10.6199C0.845376 9.77975 1.20037 8.87293 1.96835 8.41538C2.97203 7.81739 4.28296 8.20378 4.77822 9.24355L5.90774 11.615L9.08807 3.0956C9.41891 2.20933 10.424 1.75237 11.333 2.07494C12.2421 2.39752 12.7107 3.37748 12.3798 4.26374M12.3798 4.26374L13.1786 2.1241C13.5095 1.23783 14.5146 0.780878 15.4235 1.10345C16.3325 1.42602 16.8012 2.40598 16.4704 3.29225L15.6717 5.43189M12.3798 4.26374L10.5827 9.07792M15.6717 5.43189C16.0025 4.54562 17.0076 4.08865 17.9165 4.41123C18.8255 4.73381 19.2943 5.71377 18.9634 6.60003L18.1647 8.73966M15.6717 5.43189L13.8744 10.246M18.1647 8.73966C18.4955 7.8534 19.5006 7.39643 20.4095 7.71901C21.3186 8.04158 21.7873 9.02154 21.4565 9.90783L20.458 12.5824M18.1647 8.73966L17.1663 11.4143"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.7746 14.2915C24.4347 16.2676 23.4444 18.4316 21.5625 19.1248"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="t2">Your daily dashboard is here</div>
                  </div>
                </div>

                <div className="income">
                  <div className="img">
                    <svg
                      width={20}
                      height={23}
                      viewBox="0 0 20 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9427 16.5367C18.2864 12.4234 16.2432 9.36039 14.467 7.5613C13.9501 7.03777 13.6917 6.77601 13.1208 6.53376C12.5499 6.2915 12.0592 6.2915 11.0778 6.2915H8.9222C7.94081 6.2915 7.4501 6.2915 6.87922 6.53376C6.30834 6.77601 6.04991 7.03777 5.53304 7.5613C3.75682 9.36039 1.71361 12.4234 1.05727 16.5367C0.568928 19.5971 3.27927 21.9165 6.30832 21.9165H13.6917C16.7207 21.9165 19.4311 19.5971 18.9427 16.5367Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10.663 10.4585C10.663 10.027 10.3273 9.67725 9.913 9.67725C9.4988 9.67725 9.163 10.027 9.163 10.4585H10.663ZM9.163 17.7502C9.163 18.1816 9.4988 18.5314 9.913 18.5314C10.3273 18.5314 10.663 18.1816 10.663 17.7502H9.163ZM10.9857 12.4938C11.2363 12.8372 11.7068 12.904 12.0366 12.643C12.3664 12.3818 12.4305 11.8917 12.1798 11.5482L10.9857 12.4938ZM8.7472 15.7733C8.4385 15.4856 7.9644 15.513 7.68816 15.8344C7.41193 16.156 7.43821 16.6498 7.74687 16.9377L8.7472 15.7733ZM9.913 13.2182C9.2657 13.2182 8.971 13.1082 8.8538 13.0259C8.8 12.9882 8.75 12.9454 8.75 12.7392H7.25C7.25 13.345 7.46084 13.9324 8.0158 14.3218C8.5072 14.6666 9.169 14.7807 9.913 14.7807V13.2182ZM8.75 12.7392C8.75 12.6397 8.8008 12.4856 9.0056 12.3282C9.2101 12.1709 9.5285 12.0501 9.913 12.0501V10.4876C9.241 10.4876 8.6029 10.6959 8.115 11.0709C7.62743 11.4456 7.25 12.0266 7.25 12.7392H8.75ZM11.25 15.4698C11.25 15.701 11.1711 15.8236 11.0026 15.9291C10.7885 16.0631 10.4212 16.1589 9.913 16.1589V17.7214C10.5575 17.7214 11.2337 17.6072 11.7749 17.2685C12.3617 16.9014 12.75 16.2888 12.75 15.4698H11.25ZM9.913 14.7807C10.5664 14.7807 10.9071 14.8855 11.0685 14.9952C11.1626 15.059 11.25 15.1526 11.25 15.4698H12.75C12.75 14.7368 12.4896 14.0952 11.888 13.6864C11.3538 13.3235 10.651 13.2182 9.913 13.2182V14.7807ZM10.663 11.2688V10.4585H9.163V11.2688H10.663ZM9.163 16.9402V17.7502H10.663V16.9402H9.163ZM9.913 12.0501C10.4479 12.0501 10.8287 12.2787 10.9857 12.4938L12.1798 11.5482C11.6817 10.8656 10.8126 10.4876 9.913 10.4876V12.0501ZM9.913 16.1589C9.3796 16.1589 8.9651 15.9764 8.7472 15.7733L7.74687 16.9377C8.2909 17.4447 9.0853 17.7214 9.913 17.7214V16.1589Z"
                        fill="black"
                      />
                      <path
                        d="M5.25662 3.62815C5.05031 3.31535 4.75128 2.89078 5.36899 2.79396C6.00392 2.69444 6.66321 3.14718 7.30855 3.13788C7.89237 3.12946 8.1898 2.85974 8.5089 2.47462C8.8449 2.06909 9.3652 1.0835 10 1.0835C10.6348 1.0835 11.1551 2.06909 11.4911 2.47462C11.8102 2.85974 12.1076 3.12946 12.6914 3.13788C13.3368 3.14718 13.9961 2.69444 14.631 2.79396C15.2487 2.89078 14.9497 3.31535 14.7434 3.62815L13.8105 5.0425C13.4115 5.64752 13.212 5.95003 12.7944 6.12093C12.3769 6.29183 11.8373 6.29183 10.7582 6.29183H9.2418C8.1627 6.29183 7.6231 6.29183 7.20556 6.12093C6.78802 5.95003 6.5885 5.64752 6.18945 5.0425L5.25662 3.62815Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    <div className="t1">
                      0,00 <span>XAF</span>
                    </div>
                    <div className="t2">Today income</div>
                  </div>
                </div>
              </div>

              <div className="section section2">
                <div className="statItem">
                  <div className="img">
                    <svg
                      width={25}
                      height={29}
                      viewBox="0 0 25 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.051 20.7456C23.2033 15.645 20.5641 11.8469 18.2699 9.61605C17.6022 8.96688 17.2684 8.6423 16.531 8.34191C15.7936 8.0415 15.1598 8.0415 13.8922 8.0415H11.1078C9.84021 8.0415 9.20638 8.0415 8.46899 8.34191C7.7316 8.6423 7.3978 8.96688 6.73017 9.61605C4.43589 11.8469 1.79674 15.645 0.948971 20.7456C0.318199 24.5405 3.81905 27.4165 7.73158 27.4165H17.2684C21.1809 27.4165 24.6818 24.5405 24.051 20.7456Z"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.3563 13.2085C13.3563 12.6735 12.9227 12.2397 12.3876 12.2397C11.8526 12.2397 11.4188 12.6735 11.4188 13.2085H13.3563ZM11.4188 22.2502C11.4188 22.7852 11.8526 23.2189 12.3876 23.2189C12.9227 23.2189 13.3563 22.7852 13.3563 22.2502H11.4188ZM13.7732 15.7323C14.0968 16.1581 14.7046 16.2409 15.1306 15.9173C15.5566 15.5934 15.6394 14.9857 15.3155 14.5597L13.7732 15.7323ZM10.8818 19.7988C10.483 19.4421 9.87064 19.4761 9.51383 19.8747C9.15704 20.2734 9.19098 20.8858 9.58967 21.2427L10.8818 19.7988ZM12.3876 16.6305C11.5515 16.6305 11.1708 16.4941 11.0195 16.3921C10.95 16.3453 10.8854 16.2922 10.8854 16.0366H8.94788C8.94788 16.7877 9.22021 17.5161 9.93703 17.999C10.5718 18.4266 11.4266 18.568 12.3876 18.568V16.6305ZM10.8854 16.0366C10.8854 15.9132 10.951 15.7221 11.2155 15.5269C11.4797 15.3319 11.8909 15.182 12.3876 15.182V13.2445C11.5196 13.2445 10.6954 13.5029 10.0652 13.9679C9.43539 14.4325 8.94788 15.153 8.94788 16.0366H10.8854ZM14.1145 19.4226C14.1145 19.7092 14.0126 19.8612 13.795 19.9921C13.5184 20.1582 13.044 20.277 12.3876 20.277V22.2145C13.2201 22.2145 14.0935 22.0729 14.7925 21.6529C15.5505 21.1977 16.052 20.4381 16.052 19.4226H14.1145ZM12.3876 18.568C13.2316 18.568 13.6716 18.6979 13.8801 18.834C14.0017 18.9131 14.1145 19.0291 14.1145 19.4226H16.052C16.052 18.5136 15.7157 17.718 14.9386 17.2111C14.2486 16.7611 13.3408 16.6305 12.3876 16.6305V18.568ZM13.3563 14.2133V13.2085H11.4188V14.2133H13.3563ZM11.4188 21.2458V22.2502H13.3563V21.2458H11.4188ZM12.3876 15.182C13.0785 15.182 13.5704 15.4656 13.7732 15.7323L15.3155 14.5597C14.6722 13.7133 13.5496 13.2445 12.3876 13.2445V15.182ZM12.3876 20.277C11.6986 20.277 11.1632 20.0507 10.8818 19.7988L9.58967 21.2427C10.2924 21.8714 11.3185 22.2145 12.3876 22.2145V20.277Z"
                        fill="#FF6B01"
                      />
                      <path
                        d="M6.37309 4.73887C6.10661 4.351 5.72036 3.82452 6.51824 3.70448C7.33836 3.58107 8.18994 4.14247 9.0235 4.13093C9.7776 4.1205 10.1618 3.78603 10.574 3.30849C11.008 2.80563 11.68 1.5835 12.5 1.5835C13.3199 1.5835 13.992 2.80563 14.426 3.30849C14.8381 3.78603 15.2223 4.1205 15.9764 4.13093C16.81 4.14247 17.6616 3.58107 18.4817 3.70448C19.2795 3.82452 18.8933 4.351 18.6269 4.73887L17.4219 6.49266C16.9065 7.24288 16.6488 7.61799 16.1094 7.82992C15.5701 8.04183 14.8731 8.04183 13.4793 8.04183H11.5206C10.1268 8.04183 9.4298 8.04183 8.89047 7.82992C8.35115 7.61799 8.09344 7.24288 7.578 6.49266L6.37309 4.73887Z"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <div className="text">
                    <div className="t1">
                      {" "}
                      865,456 <span>XAF</span>
                    </div>
                    <div className="t2">Total revenew</div>
                  </div>
                </div>
                <div className="statItem">
                  <div className="img">
                    <svg
                      width={20}
                      height={23}
                      viewBox="0 0 20 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.2383 1.33317C2.2617 0.251407 3.87072 0 5.91669 0H14.094C16.1396 0 17.7494 0.251267 18.7716 1.33368C19.7758 2.39708 20.0052 4.0518 19.9999 6.1944C19.9999 6.19467 19.9999 6.19412 19.9999 6.1944V18.2481C19.9999 19.0235 19.8943 19.7102 19.6652 20.2683C19.4351 20.8289 19.0547 21.3141 18.4853 21.5572C17.91 21.8027 17.2938 21.7364 16.7318 21.4968C16.1777 21.2604 15.6302 20.8401 15.1029 20.2834L15.1014 20.2818C14.8104 19.973 14.4794 19.8625 14.1895 19.8781C13.8993 19.8938 13.5818 20.0395 13.3261 20.3767L12.2342 21.82L12.2314 21.8236C11.6632 22.5658 10.8634 23 9.99996 23C9.13646 23 8.33672 22.5658 7.76851 21.8236L7.76575 21.82L6.67385 20.3767C6.41814 20.0395 6.1006 19.8938 5.81038 19.8781C5.52052 19.8625 5.18949 19.973 4.89852 20.2818L4.89714 20.2833C4.37211 20.8377 3.8258 21.2568 3.27196 21.4924C2.71034 21.7313 2.09449 21.7971 1.51927 21.5521C0.949643 21.3094 0.567907 20.8249 0.336569 20.2631C0.106368 19.704 0 19.0157 0 18.2374V6.19323C0 4.05014 0.232902 2.3959 1.2383 1.33317ZM2.42313 2.4293C1.89797 2.98441 1.62249 4.02566 1.62249 6.19323V18.2374C1.62249 18.8871 1.71353 19.3526 1.83926 19.658C1.96386 19.9606 2.09658 20.051 2.16108 20.0785C2.21998 20.1035 2.35791 20.1346 2.63087 20.0185C2.91159 19.8991 3.28064 19.643 3.71288 19.1865L4.30501 19.7349L3.7115 19.188C4.30749 18.5555 5.09598 18.2328 5.8986 18.276C6.70086 18.3192 7.44875 18.7243 7.97184 19.414L9.06214 20.8552C9.06254 20.8557 9.06295 20.8562 9.06336 20.8568C9.37099 21.2578 9.71726 21.3955 9.99996 21.3955C10.2827 21.3955 10.6289 21.2578 10.9366 20.8567C10.937 20.8562 10.9374 20.8557 10.9378 20.8552L12.0275 19.4148C12.5506 18.7251 13.2991 18.3192 14.1013 18.276C14.9035 18.2328 15.6916 18.5552 16.2874 19.187C16.7225 19.6461 17.093 19.9035 17.3743 20.0234C17.6479 20.1401 17.7849 20.1086 17.8423 20.0841C17.9057 20.057 18.0377 19.9672 18.1618 19.6648C18.287 19.3599 18.3774 18.8954 18.3774 18.2481V6.19323L18.3774 6.19124C18.3829 4.02358 18.1092 2.98309 17.5858 2.42878C17.0801 1.89337 16.1371 1.60446 14.094 1.60446H5.91669C3.87397 1.60446 2.93028 1.89323 2.42313 2.4293Z"
                        fill="#FF6B01"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.86749 6.15038C4.86749 5.70732 5.2307 5.34814 5.67874 5.34814H14.332C14.7801 5.34814 15.1433 5.70732 15.1433 6.15038C15.1433 6.59344 14.7801 6.95261 14.332 6.95261H5.67874C5.2307 6.95261 4.86749 6.59344 4.86749 6.15038Z"
                        fill="#FF6B01"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.94916 10.4292C5.94916 9.98612 6.31236 9.62695 6.7604 9.62695H13.2504C13.6984 9.62695 14.0616 9.98612 14.0616 10.4292C14.0616 10.8722 13.6984 11.2314 13.2504 11.2314H6.7604C6.31236 11.2314 5.94916 10.8722 5.94916 10.4292Z"
                        fill="#FF6B01"
                      />
                    </svg>
                  </div>

                  <div className="text">
                    <div className="t1"> 205</div>
                    <div className="t2">Total Menus</div>
                  </div>
                </div>
                <div className="statItem">
                  <div className="img">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6161 18H19.1063C20.2561 18 21.1707 17.4761 21.9919 16.7436C24.078 14.8826 19.1741 13 17.5 13M15.5 3.06877C15.7271 3.02373 15.9629 3 16.2048 3C18.0247 3 19.5 4.34315 19.5 6C19.5 7.65685 18.0247 9 16.2048 9C15.9629 9 15.7271 8.9763 15.5 8.9312"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4.48131 14.1112C3.30234 14.743 0.211139 16.0331 2.09388 17.6474C3.01359 18.436 4.03791 19 5.32572 19H12.6743C13.9621 19 14.9864 18.436 15.9061 17.6474C17.7889 16.0331 14.6977 14.743 13.5187 14.1112C10.754 12.6296 7.24599 12.6296 4.48131 14.1112Z"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M13 5.5C13 7.70914 11.2091 9.5 9 9.5C6.79086 9.5 5 7.70914 5 5.5C5 3.29086 6.79086 1.5 9 1.5C11.2091 1.5 13 3.29086 13 5.5Z"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <div className="text">
                    <div className="t1"> + 452 k</div>
                    <div className="t2">Total Users</div>
                  </div>
                </div>
                <div className="statItem">
                  <div className="img">
                    <svg
                      width={24}
                      height={28}
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 26.5C10.9773 26.5 10.0003 26.0873 8.04616 25.2619C3.18205 23.2071 0.75 22.1798 0.75 20.4516C0.75 19.9678 0.75 11.5806 0.75 7.75M12 26.5C13.0227 26.5 13.9998 26.0873 15.9539 25.2619C20.818 23.2071 23.25 22.1798 23.25 20.4516V7.75M12 26.5V13.1935"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.4074 11.1142L3.7559 9.34731C1.75196 8.37763 0.75 7.89279 0.75 7.125C0.75 6.35721 1.75196 5.87237 3.7559 4.90269L7.4074 3.13577C9.661 2.04526 10.7879 1.5 12 1.5C13.2121 1.5 14.339 2.04525 16.5926 3.13577L20.2441 4.90269C22.248 5.87237 23.25 6.35721 23.25 7.125C23.25 7.89279 22.248 8.37763 20.2441 9.34731L16.5926 11.1142C14.339 12.2047 13.2121 12.75 12 12.75C10.7879 12.75 9.661 12.2047 7.4074 11.1142Z"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 14L7 15.25"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.25 4L5.75 10.25"
                        stroke="#FF6B01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="text">
                    <div className="t1">54876</div>
                    <div className="t2">Total Orders</div>
                  </div>
                </div>
              </div>

              <div className="section section3">
                <div className="statItem2">
                  <div className="head_statItem">
                    <span className="title">Income Report</span>
                    <select name="time" id="">
                      <option value="This month">This month</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                    </select>
                  </div>

                  <div className="statValue">
                    <div className="ico">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.75 38.75H15.8333C8.95869 38.75 5.52135 38.75 3.38569 36.6144C1.25 34.4785 1.25 31.0412 1.25 24.1667V1.25"
                          stroke="#FF6B01"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.58337 3.3335H11.6667"
                          stroke="#FF6B01"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.58337 9.5835H17.9167"
                          stroke="#FF6B01"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.41663 36.6668C7.64773 32.6106 10.6724 22.1229 16.4714 22.1229C20.4793 22.1229 21.5172 27.2329 25.445 27.2329C32.2025 27.2329 31.2229 15.8335 38.75 15.8335"
                          stroke="#FF6B01"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="text">
                      <div className="t1">
                        365,456 <span>XAF</span>
                      </div>
                      <div className="t2">January total income</div>
                    </div>
                  </div>
                </div>
                <div className="statItem2">
                  <div className="head_statItem">
                    <span className="title">Most Selling Items</span>
                    <select name="time" id="">
                      <option value="This month">This month</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                    </select>
                  </div>

                  <div className="group_item">
                    <div className="item">
                      <div className="left">
                        <div className="img">
                          <img src={menuItem} alt="menu Item" />
                        </div>
                        <div className="text">
                          <div className="t1">Grillade de porc épicée</div>
                          <div className="t2">Grillade</div>
                          <div className="t3">
                            Serve for <span>02 persons</span>
                          </div>
                        </div>
                      </div>

                      <div className="price">5000 XAF</div>

                      <div className="btn_edit">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.485 2.40419L11.4779 1.41128C12.0263 0.862907 12.9154 0.862907 13.4637 1.41128C14.0121 1.95965 14.0121 2.84873 13.4637 3.3971L12.4708 4.39002M10.485 2.40419L6.77765 6.11154C6.03725 6.85196 5.66702 7.22214 5.41493 7.67328C5.16284 8.12441 4.90921 9.18968 4.66667 10.2083C5.68532 9.9658 6.75059 9.71214 7.20173 9.46005C7.65286 9.20795 8.02304 8.83778 8.76346 8.09736L12.4708 4.39002M10.485 2.40419L12.4708 4.39002"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.875 7.375C13.875 10.3802 13.875 11.8828 12.9414 12.8164C12.0078 13.75 10.5052 13.75 7.5 13.75C4.4948 13.75 2.99219 13.75 2.0586 12.8164C1.125 11.8828 1.125 10.3802 1.125 7.375C1.125 4.3698 1.125 2.86719 2.0586 1.9336C2.99219 1 4.4948 1 7.5 1"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="item">
                      <div className="left">
                        <div className="img">
                          <img src={menuItem} alt="menu Item" />
                        </div>
                        <div className="text">
                          <div className="t1">Grillade de porc épicée</div>
                          <div className="t2">Grillade</div>
                          <div className="t3">
                            Serve for <span>02 persons</span>
                          </div>
                        </div>
                      </div>

                      <div className="price">5000 XAF</div>

                      <div className="btn_edit">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.485 2.40419L11.4779 1.41128C12.0263 0.862907 12.9154 0.862907 13.4637 1.41128C14.0121 1.95965 14.0121 2.84873 13.4637 3.3971L12.4708 4.39002M10.485 2.40419L6.77765 6.11154C6.03725 6.85196 5.66702 7.22214 5.41493 7.67328C5.16284 8.12441 4.90921 9.18968 4.66667 10.2083C5.68532 9.9658 6.75059 9.71214 7.20173 9.46005C7.65286 9.20795 8.02304 8.83778 8.76346 8.09736L12.4708 4.39002M10.485 2.40419L12.4708 4.39002"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.875 7.375C13.875 10.3802 13.875 11.8828 12.9414 12.8164C12.0078 13.75 10.5052 13.75 7.5 13.75C4.4948 13.75 2.99219 13.75 2.0586 12.8164C1.125 11.8828 1.125 10.3802 1.125 7.375C1.125 4.3698 1.125 2.86719 2.0586 1.9336C2.99219 1 4.4948 1 7.5 1"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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
  USER_DATA: state.USER_DATA,
});

const mapDispatchToProps = {
  increment,
  decrement,
  menuio,
  userconnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
