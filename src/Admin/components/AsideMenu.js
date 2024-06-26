import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logResto from "../images/logo.png";
import imgQR from "../images/qr.webp";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
import { getUserData } from "../../utils";
import { fileDownload, fn_downloadAndCacheImage } from "../API/api";
import { endpoints } from "../API/EndPoints";

import { useQrious } from "react-qrious";


import qrious from "qrious";

const icoHome = (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17C1 15.4596 1 14.6893 1.34673 14.1235C1.54074 13.8069 1.80693 13.5407 2.12353 13.3467C2.68934 13 3.45956 13 5 13C6.54044 13 7.31066 13 7.87647 13.3467C8.19307 13.5407 8.45926 13.8069 8.65327 14.1235C9 14.6893 9 15.4596 9 17C9 18.5404 9 19.3107 8.65327 19.8765C8.45926 20.1931 8.19307 20.4593 7.87647 20.6533C7.31066 21 6.54044 21 5 21C3.45956 21 2.68934 21 2.12353 20.6533C1.80693 20.4593 1.54074 20.1931 1.34673 19.8765C1 19.3107 1 18.5404 1 17Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M13 17C13 15.4596 13 14.6893 13.3467 14.1235C13.5407 13.8069 13.8069 13.5407 14.1235 13.3467C14.6893 13 15.4596 13 17 13C18.5404 13 19.3107 13 19.8765 13.3467C20.1931 13.5407 20.4593 13.8069 20.6533 14.1235C21 14.6893 21 15.4596 21 17C21 18.5404 21 19.3107 20.6533 19.8765C20.4593 20.1931 20.1931 20.4593 19.8765 20.6533C19.3107 21 18.5404 21 17 21C15.4596 21 14.6893 21 14.1235 20.6533C13.8069 20.4593 13.5407 20.1931 13.3467 19.8765C13 19.3107 13 18.5404 13 17Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M1 5C1 3.45956 1 2.68934 1.34673 2.12353C1.54074 1.80693 1.80693 1.54074 2.12353 1.34673C2.68934 1 3.45956 1 5 1C6.54044 1 7.31066 1 7.87647 1.34673C8.19307 1.54074 8.45926 1.80693 8.65327 2.12353C9 2.68934 9 3.45956 9 5C9 6.54044 9 7.31066 8.65327 7.87647C8.45926 8.19307 8.19307 8.45926 7.87647 8.65327C7.31066 9 6.54044 9 5 9C3.45956 9 2.68934 9 2.12353 8.65327C1.80693 8.45926 1.54074 8.19307 1.34673 7.87647C1 7.31066 1 6.54044 1 5Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M13 5C13 3.45956 13 2.68934 13.3467 2.12353C13.5407 1.80693 13.8069 1.54074 14.1235 1.34673C14.6893 1 15.4596 1 17 1C18.5404 1 19.3107 1 19.8765 1.34673C20.1931 1.54074 20.4593 1.80693 20.6533 2.12353C21 2.68934 21 3.45956 21 5C21 6.54044 21 7.31066 20.6533 7.87647C20.4593 8.19307 20.1931 8.45926 19.8765 8.65327C19.3107 9 18.5404 9 17 9C15.4596 9 14.6893 9 14.1235 8.65327C13.8069 8.45926 13.5407 8.19307 13.3467 7.87647C13 7.31066 13 6.54044 13 5Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

const icoOrder = (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.5V17.5"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 17.5C9.7777 17.5 9.3235 17.2579 8.41526 16.7738C7.4921 16.2818 6.2167 15.7922 4.5825 15.4849C2.74929 15.1401 1.83268 14.9678 1.41634 14.4588C1 13.9499 1 13.1347 1 11.5044V5.09655C1 3.31353 1 2.42202 1.6487 1.87302C2.29741 1.32401 3.05911 1.46725 4.5825 1.75372C7.58958 2.3192 9.3818 3.50205 10 4.18114C10.6182 3.50205 12.4104 2.3192 15.4175 1.75372C16.9409 1.46725 17.7026 1.32401 18.3513 1.87302C19 2.42202 19 3.31353 19 5.09655V8"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.6659 13.6412L16.3581 16.949L17.4187 18.0097L20.7266 14.7018L19.6659 13.6412ZM14.5511 15.142L17.8589 11.8342L16.7983 10.7735L13.4904 14.0814L14.5511 15.142ZM14.191 17.6223C14.0156 17.6598 13.8754 17.6897 13.7549 17.7121C13.6334 17.7347 13.5537 17.7454 13.4997 17.7488C13.4442 17.7524 13.448 17.7458 13.4826 17.7547C13.5297 17.7669 13.5937 17.7972 13.6483 17.8518L12.5877 18.9124C12.9114 19.2362 13.3159 19.2636 13.5949 19.2458C13.8604 19.2289 14.184 19.1577 14.5046 19.0891L14.191 17.6223ZM12.411 16.9955C12.3424 17.3161 12.2712 17.6397 12.2543 17.9052C12.2365 18.1842 12.2639 18.5887 12.5877 18.9124L13.6483 17.8518C13.7029 17.9064 13.7332 17.9704 13.7454 18.0175C13.7543 18.0521 13.7477 18.0559 13.7513 18.0004C13.7547 17.9464 13.7654 17.8667 13.788 17.7452C13.8104 17.6247 13.8403 17.4845 13.8778 17.3091L12.411 16.9955ZM19.6659 11.8342C20.0334 12.2017 20.1085 12.286 20.1468 12.3523L21.4459 11.6023C21.284 11.3218 21.0258 11.0728 20.7266 10.7735L19.6659 11.8342ZM20.7266 14.7018C21.0258 14.4026 21.284 14.1535 21.4459 13.8731L20.1468 13.1231C20.1085 13.1894 20.0334 13.2737 19.6659 13.6412L20.7266 14.7018ZM20.1468 12.3523C20.2845 12.5908 20.2845 12.8846 20.1468 13.1231L21.4459 13.8731C21.8515 13.1705 21.8515 12.3049 21.4459 11.6023L20.1468 12.3523ZM20.7266 10.7735C20.4273 10.4743 20.1783 10.2161 19.8978 10.0542L19.1478 11.3533C19.2141 11.3916 19.2984 11.4667 19.6659 11.8342L20.7266 10.7735ZM17.8589 11.8342C18.2264 11.4667 18.3107 11.3916 18.377 11.3533L17.627 10.0542C17.3466 10.2161 17.0975 10.4743 16.7983 10.7735L17.8589 11.8342ZM19.8978 10.0542C19.1952 9.6486 18.3296 9.6486 17.627 10.0542L18.377 11.3533C18.6155 11.2156 18.9093 11.2156 19.1478 11.3533L19.8978 10.0542ZM16.3581 16.949C16.1625 17.1445 15.8953 17.271 15.5156 17.3679C15.3254 17.4165 15.1225 17.454 14.8964 17.4931C14.6791 17.5306 14.4304 17.5711 14.191 17.6223L14.5046 19.0891C14.7064 19.046 14.9132 19.0124 15.1518 18.9712C15.3815 18.9315 15.6347 18.8856 15.8867 18.8213C16.3915 18.6924 16.9534 18.475 17.4187 18.0097L16.3581 16.949ZM13.8778 17.3091C13.929 17.0697 13.9695 16.821 14.007 16.6037C14.0461 16.3776 14.0836 16.1747 14.1322 15.9845C14.2291 15.6048 14.3556 15.3376 14.5511 15.142L13.4904 14.0814C13.0251 14.5467 12.8077 15.1086 12.6788 15.6134C12.6145 15.8654 12.5686 16.1186 12.5289 16.3483C12.4877 16.5869 12.4541 16.7937 12.411 16.9955L13.8778 17.3091Z"
      fill="#717E91"
    />
  </svg>
);

const icoMenus = (
  <svg
    width={22}
    height={18}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8541 1H8.14593C5.6503 1 3.52873 2.68344 2.75294 5.02892C2.49753 5.80111 2.36982 6.18721 2.69065 6.59361C3.01149 7 3.53377 7 4.57833 7H17.4217C18.4662 7 18.9885 7 19.3093 6.59361C19.6302 6.18721 19.5025 5.80111 19.2471 5.02892C18.4713 2.68344 16.3497 1 13.8541 1Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 13H2.5C1.67157 13 1 12.3284 1 11.5C1 10.6716 1.67157 10 2.5 10H10.3944C10.7893 10 11.1753 10.1169 11.5038 10.3359L13.4453 11.6302C13.7812 11.8541 14.2188 11.8541 14.5547 11.6302L16.4962 10.3359C16.8247 10.1169 17.2107 10 17.6056 10H19.5C20.3284 10 21 10.6716 21 11.5C21 12.3284 20.3284 13 19.5 13H19M3 13L3.4319 14.7276C3.76578 16.0631 4.96573 17 6.34233 17H15.6577C17.0343 17 18.2342 16.0631 18.5681 14.7276L19 13M3 13H10M19 13H17.5"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0079 4H13.9988"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 3.5L8.5 4.5"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icoCatego = (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5C1 3.59987 1 2.8998 1.27248 2.36502C1.51217 1.89462 1.89462 1.51217 2.36502 1.27248C2.8998 1 3.59987 1 5 1C6.40013 1 7.1002 1 7.63498 1.27248C8.10538 1.51217 8.48783 1.89462 8.72752 2.36502C9 2.8998 9 3.59987 9 5V15C9 16.4001 9 17.1002 8.72752 17.635C8.48783 18.1054 8.10538 18.4878 7.63498 18.7275C7.1002 19 6.40013 19 5 19C3.59987 19 2.8998 19 2.36502 18.7275C1.89462 18.4878 1.51217 18.1054 1.27248 17.635C1 17.1002 1 16.4001 1 15V5Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 15H5.00786"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 5H9"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4486 6.26843C10.0937 4.93838 9.91629 4.27336 10.0385 3.69599C10.146 3.18812 10.4108 2.72747 10.7951 2.38005C11.2319 1.98508 11.8942 1.80689 13.2187 1.4505C14.5432 1.09412 15.2055 0.915928 15.7804 1.03865C16.2862 1.1466 16.7449 1.41256 17.0909 1.79841C17.4842 2.23706 17.6617 2.90209 18.0166 4.23213L20.5514 13.7316C20.9063 15.0616 21.0837 15.7266 20.9615 16.304C20.854 16.8119 20.5892 17.2725 20.2049 17.62C19.7681 18.0149 19.1058 18.1931 17.7813 18.5495C16.4568 18.9059 15.7945 19.0841 15.2196 18.9614C14.7138 18.8534 14.2551 18.5874 13.9091 18.2016C13.5158 17.7629 13.3383 17.0979 12.9834 15.7679L10.4486 6.26843Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7812 14.6949L16.7889 14.6929"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 6.00019L17.5001 4"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icoVente = (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 4C17.3284 4 18 4.67157 18 5.5C18 6.32843 17.3284 7 16.5 7C15.6716 7 15 6.32843 15 5.5C15 4.67157 15.6716 4 16.5 4Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.77423 10.1439C0.771083 11.2643 0.749503 12.9546 1.67016 14.1437C3.49711 16.5033 5.49674 18.5029 7.85633 20.3298C9.0454 21.2505 10.7357 21.2289 11.8561 20.2258C14.8979 17.5022 17.6835 14.6559 20.3719 11.5279C20.6377 11.2187 20.8039 10.8397 20.8412 10.4336C21.0062 8.63798 21.3452 3.46467 19.9403 2.05974C18.5353 0.65481 13.362 0.99377 11.5664 1.15876C11.1603 1.19608 10.7813 1.36233 10.472 1.62811C7.34412 4.31646 4.49781 7.10211 1.77423 10.1439Z"
      stroke="#717E91"
      strokeWidth="1.5"
    />
    <path
      d="M13.5299 9.5308C13.823 9.2381 13.8234 8.76324 13.5308 8.47011C13.2381 8.17697 12.7632 8.17658 12.4701 8.46923L13.5299 9.5308ZM6.47011 14.4594C6.17697 14.752 6.17658 15.2269 6.46923 15.52C6.76189 15.8132 7.23676 15.8136 7.52989 15.5209L6.47011 14.4594ZM12.0644 11.1568C11.9548 11.5563 12.1898 11.9689 12.5893 12.0785C12.9887 12.1881 13.4014 11.9531 13.511 11.5536L12.0644 11.1568ZM7.82372 12.8411C7.86014 12.4285 7.55518 12.0645 7.14257 12.0281C6.72996 11.9916 6.36595 12.2966 6.32953 12.7092L7.82372 12.8411ZM10.6162 11.3782C10.2265 10.9891 10.1584 10.7557 10.1528 10.6524C10.1486 10.5741 10.1725 10.427 10.4234 10.1766L9.3636 9.115C8.9463 9.5317 8.61938 10.0697 8.655 10.7329C8.68929 11.3712 9.0517 11.9358 9.5564 12.4397L10.6162 11.3782ZM10.4234 10.1766C10.7907 9.8099 11.4087 9.8025 11.8033 10.1965L12.8631 9.1349C11.8993 8.17271 10.3327 8.14751 9.3636 9.115L10.4234 10.1766ZM9.6881 13.9255C9.3909 14.2222 9.1553 14.2655 8.97835 14.2459C8.76713 14.2226 8.49422 14.0912 8.19643 13.7939L7.13664 14.8555C7.57981 15.2979 8.15055 15.6637 8.81378 15.7369C9.5113 15.8139 10.181 15.553 10.7479 14.987L9.6881 13.9255ZM9.5564 12.4397C9.9524 12.835 10.0529 13.0944 10.0635 13.2462C10.0719 13.3673 10.0336 13.5806 9.6881 13.9255L10.7479 14.987C11.2667 14.4691 11.6097 13.8552 11.5598 13.1416C11.5121 12.4587 11.1146 11.8757 10.6162 11.3782L9.5564 12.4397ZM12.8631 10.1965L13.5299 9.5308L12.4701 8.46923L11.8033 9.1349L12.8631 10.1965ZM7.13664 13.7939L6.47011 14.4594L7.52989 15.5209L8.19643 14.8555L7.13664 13.7939ZM11.8033 10.1965C12.0689 10.4616 12.1535 10.8318 12.0644 11.1568L13.511 11.5536C13.7394 10.7208 13.5196 9.7903 12.8631 9.1349L11.8033 10.1965ZM8.19643 13.7939C7.91097 13.509 7.79655 13.149 7.82372 12.8411L6.32953 12.7092C6.26204 13.4739 6.54709 14.2669 7.13664 14.8555L8.19643 13.7939Z"
      fill="#717E91"
    />
  </svg>
);

const icoStat = (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 16V12"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 16V6"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 16V10"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const icoAdmin = (
  <svg
    width={21}
    height={18}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2891 15.5H16.718C17.7241 15.5 18.5244 15.0416 19.2429 14.4007C21.0683 12.7723 16.7773 11.125 15.3125 11.125M13.5625 2.43517C13.7612 2.39576 13.9675 2.375 14.1792 2.375C15.7716 2.375 17.0625 3.55026 17.0625 5C17.0625 6.44974 15.7716 7.625 14.1792 7.625C13.9675 7.625 13.7612 7.60426 13.5625 7.5648"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3.92115 12.0973C2.88955 12.6501 0.184746 13.779 1.83215 15.1915C2.63689 15.8815 3.53317 16.375 4.66001 16.375H11.09C12.2168 16.375 13.1131 15.8815 13.9178 15.1915C15.5653 13.779 12.8605 12.6501 11.8289 12.0973C9.40975 10.8009 6.34024 10.8009 3.92115 12.0973Z"
      stroke="#717E91"
      strokeWidth="1.5"
    />
    <path
      d="M11.375 4.5625C11.375 6.4955 9.80796 8.0625 7.875 8.0625C5.942 8.0625 4.375 6.4955 4.375 4.5625C4.375 2.6295 5.942 1.0625 7.875 1.0625C9.80796 1.0625 11.375 2.6295 11.375 4.5625Z"
      stroke="#717E91"
      strokeWidth="1.5"
    />
  </svg>
);

const icoParametre = (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3175 6.14139L19.8239 5.28479C19.4506 4.63696 19.264 4.31305 18.9464 4.18388C18.6288 4.05472 18.2696 4.15664 17.5513 4.36048L16.3311 4.70418C15.8725 4.80994 15.3913 4.74994 14.9726 4.53479L14.6357 4.34042C14.2766 4.11043 14.0004 3.77133 13.8475 3.37274L13.5136 2.37536C13.294 1.71534 13.1842 1.38533 12.9228 1.19657C12.6615 1.00781 12.3143 1.00781 11.6199 1.00781H10.5051C9.8108 1.00781 9.4636 1.00781 9.2022 1.19657C8.94085 1.38533 8.83106 1.71534 8.61149 2.37536L8.27753 3.37274C8.12465 3.77133 7.84845 4.11043 7.48937 4.34042L7.15249 4.53479C6.73374 4.74994 6.25259 4.80994 5.79398 4.70418L4.57375 4.36048C3.85541 4.15664 3.49625 4.05472 3.17867 4.18388C2.86109 4.31305 2.67445 4.63696 2.30115 5.28479L1.80757 6.14139C1.45766 6.74864 1.2827 7.05227 1.31666 7.37549C1.35061 7.69871 1.58483 7.95918 2.05326 8.48012L3.0843 9.6328C3.3363 9.9518 3.51521 10.5078 3.51521 11.0077C3.51521 11.5078 3.33636 12.0636 3.08433 12.3827L2.05326 13.5354C1.58483 14.0564 1.35062 14.3168 1.31666 14.6401C1.2827 14.9633 1.45766 15.2669 1.80757 15.8741L2.30114 16.7307C2.67443 17.3785 2.86109 17.7025 3.17867 17.8316C3.49625 17.9608 3.85542 17.8589 4.57377 17.655L5.79394 17.3113C6.25263 17.2055 6.73387 17.2656 7.15267 17.4808L7.4895 17.6752C7.84851 17.9052 8.12464 18.2442 8.2775 18.6428L8.61149 19.6403C8.83106 20.3003 8.94085 20.6303 9.2022 20.8191C9.4636 21.0078 9.8108 21.0078 10.5051 21.0078H11.6199C12.3143 21.0078 12.6615 21.0078 12.9228 20.8191C13.1842 20.6303 13.294 20.3003 13.5136 19.6403L13.8476 18.6428C14.0004 18.2442 14.2765 17.9052 14.6356 17.6752L14.9724 17.4808C15.3912 17.2656 15.8724 17.2055 16.3311 17.3113L17.5513 17.655C18.2696 17.8589 18.6288 17.9608 18.9464 17.8316C19.264 17.7025 19.4506 17.3785 19.8239 16.7307L20.3175 15.8741C20.6674 15.2669 20.8423 14.9633 20.8084 14.6401C20.7744 14.3168 20.5402 14.0564 20.0718 13.5354L19.0407 12.3827C18.7887 12.0636 18.6098 11.5078 18.6098 11.0077C18.6098 10.5078 18.7888 9.9518 19.0407 9.6328L20.0718 8.48012C20.5402 7.95918 20.7744 7.69871 20.8084 7.37549C20.8423 7.05227 20.6674 6.74864 20.3175 6.14139Z"
      stroke="#717E91"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.5195 11C14.5195 12.933 12.9525 14.5 11.0195 14.5C9.0865 14.5 7.51953 12.933 7.51953 11C7.51953 9.067 9.0865 7.5 11.0195 7.5C12.9525 7.5 14.5195 9.067 14.5195 11Z"
      stroke="#717E91"
      strokeWidth="1.5"
    />
  </svg>
);

const userData = getUserData() || 0;
const isAdmin =
  userData && userData.user && userData.user.USER_TYPE
    ? userData.user.USER_TYPE && userData.user.USER_TYPE === 1
      ? true
      : false
    : false;

const navItems = isAdmin
  ? [
      { path: "/admin/app/dashboard", label: "Dashboard", ico: icoHome },
      { path: "/admin/app/orders", label: "Orders", ico: icoOrder },
      { path: "/admin/app/menus", label: "Menus", ico: icoMenus },
      { path: "/admin/app/categories", label: "Categories", ico: icoCatego },
      { path: "/admin/app/sales", label: "Sales", ico: icoVente },
      // { path: "/admin/app/statistiques", label: "Statistiques", ico: icoStat },
      { path: "/admin/app/admin", label: "Admins", ico: icoAdmin },
      { path: "/admin/app/settings", label: "Settings", ico: icoParametre },
    ]
  : [
      { path: "/admin/app/dashboard", label: "Dashboard", ico: icoHome },
      { path: "/admin/app/orders", label: "Orders", ico: icoOrder },
      { path: "/admin/app/menus", label: "Menus", ico: icoMenus },
      { path: "/admin/app/categories", label: "Categories", ico: icoCatego },
      { path: "/admin/app/sales", label: "Sales", ico: icoVente },
      // { path: "/admin/app/statistiques", label: "Statistiques", ico: icoStat },
      { path: "/admin/app/settings", label: "Settings", ico: icoParametre },
    ];

const AsideMenu = ({ menuio, isMenuActive }) => {

//   const getMainColor = ()=>{

// // const element = document.querySelector('.dashboard .app_container .asideMenu__struct .menuLink.active');
// // let color;
// // if (element) {

// //   const computedStyle = window.getComputedStyle(element);
// //   color = computedStyle.getPropertyValue('background-color');
// //   console.log(color); // Output: #ff6b01 (assuming the element exists and has the class 'active')
// // } else {
// //   console.error('Element not found');
// //   color = "#000";
// // }

// const root = document.getElementsByName('body'); // Get the root element
// const computedStyle = window.getComputedStyle(root);
// const orangeValue = computedStyle.getPropertyValue('--orange');

// return orangeValue;

//   }

  const establishmentUrl = getUserData().ESTABLISSEMENT.ESTABLISHMENT_LINK;
  const EST_url = `http://localhost:3000/${establishmentUrl}`;
  const [value, setValue] = useState(EST_url);
  const [qrInput, setQrInput] = useState(establishmentUrl);
  const [dataUrl, _qrious] = useQrious({
    value:value,
    size: 1000,
    foreground: "#000",
    level: "H",
    padding: 25,
  });

  const handleChange = (e)=>{
    console.log(e); 
    const name = e.target.name;
    const value = e.target.value;
    if(value!==""){
      setQrInput(value);
      setValue(`${EST_url}?${name}=${value}`);
    }else{
      setQrInput(EST_url);
      setValue(`${EST_url}`);
    }
   
  }

  const handleDownloadQr_LINK = () => {
    const imgElement = document.getElementById("QRCODE"); // Get the image element by ID
    const dataUrl = imgElement.src; // Extract the data URL from the 'src' attribute

    // Convert data URL to a blob (binary data)
    const data = dataUrl.replace(/^data:image\/\w+;base64,/, ""); // Remove data URL prefix
    const byteArray = data.split("").map((char) => char.charCodeAt(0));
    const blob = new Blob([new Uint8Array(byteArray)], {
      type: dataUrl.split(";")[0].split(":")[1],
    });

    // Create a link element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob); // Create a temporary URL for the blob
    downloadLink.download = "image.jpg"; // Set the desired filename

    // Trigger the click event to initiate the download
    downloadLink.click();

    // Remove the temporary URL from memory
    URL.revokeObjectURL(downloadLink.href);
  };

  const handleDownloadQr = () => {
    const imgElement = document.getElementById("QRCODE"); // Get the image element by ID
    const dataUrl = imgElement.src; // Extract the data URL from the 'src' attribute

    // Create a link element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUrl; // Create a temporary URL for the blob
    downloadLink.download = `${qrInput}.png`; // Set the desired filename

    // Trigger the click event to initiate the download
    downloadLink.click();
  };

  // const [logo, setLogo] = useState();
  // const establishmentLOGO = getUserData().ESTABLISSEMENT.ESTABLISHMENT_LOGO;

  // const fileInf = {
  //   path: establishmentLOGO,
  // };
  // const getFile = async () => {
  //   fileDownload(fileInf).then((res) => {
  //     if (res) {
  //       console.log(res);
  //       setLogo(res.data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const getFile_temp = async () => {
  //     console.log("jbkbjbjbbbbbbbbbbbbbb");

  //     try {
  //       const establishmentLOGO = getUserData().ESTABLISSEMENT.ESTABLISHMENT_LOGO;
  //       fileDownload(establishmentLOGO,"thumbnail").then((url)=>{
  //         if(url){
  //           console.log("url", url);
  //           setLogo(url);
  //           localStorage.setItem("LOGO",logo)
  //         }
  //       });

  //     } catch (error) {
  //       console.error(
  //         "Une erreur s'est produite lors du téléchargement du fichier :",
  //         error
  //       );
  //     }
  //   };
  //  getFile_temp();
  // }, [establishmentLOGO]);

  const [imageUrl, setImageUrl] = useState(null);

  const handleClickNavItem = () => {
    if (window.innerWidth <= 750) {
      menuio();
    }
  };

  useEffect(() => {
    // Fetch logo from external source (replace with your actual logic)
    console.log("DASHBOARD getUserData().ESTABLISSEMENT.ESTABLISHMENT_LOGO", getUserData().ESTABLISSEMENT.ESTABLISHMENT_LOGO);
    
    fetch(
      endpoints.public.fileDownload +
        `?path=${
          getUserData().ESTABLISSEMENT.ESTABLISHMENT_LOGO
        }&type=thumbnail`
    )
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setImageUrl(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error("Error fetching logo:", error));
  }, []);

  // useEffect(() => {
  //   if (establishmentUrl) {
  //     const tqrious = new qrious({
  //       value: value, // Use the state value for dynamic QR code generation
  //       size: 1000,
  //       foreground: '#000',
  //       level: 'H',
  //       padding: 25,
  //     });

  //     tqrious.toDataURL((err, dataURL) => {
  //       if (err) {
  //         console.error('Error generating QR code:', err);
  //         return;
  //       }

  //       setQrImg(dataURL);
  //     });
  //   }
  // }, [establishmentUrl, value]);

  return (
    <div className={`asideMenu ${isMenuActive ? "activeMenuMob" : ""}`}>
      <div className="asideMenu__struct">
        <div className="logoResto">
          <img
            style={
              imageUrl
                ? { opacity: 1, transform: "rotate(2turn) scale(1)" }
                : { opacity: 0, transform: "rotate(1turn) scale(2)" }
            }
            src={imageUrl}
            alt={logResto}
          />
        </div>

        <nav className="menuLink">
          {navItems.map(function (item, index) {
            return (
              <NavLink
                onClick={handleClickNavItem}
                key={index}
                to={item.path}
                className={"menu_item link"}
              >
                <div className="menu_item__struct">
                  {item.ico}
                  <span className="text">{item.label}</span>
                </div>
              </NavLink>
            );
          })}
        </nav>

        <div className="qrContainer">
          <div className="qrlink">
            {" "}
            <span className="text">Scan to live preview</span>

           

            <svg
              width={9}
              height={9}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.625 1.375L0.75 8.25"
                stroke="#717E91"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.875 0.832208C3.875 0.832208 7.39594 0.535402 7.93031 1.06972C8.46462 1.60405 8.16775 5.12501 8.16775 5.12501"
                stroke="#717E91"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input className="qrInput" name="qrname" placeholder="Nom code QR" type="text" onChange={handleChange} />
          <div className="qr">
            <img id="QRCODE" src={dataUrl} alt="imgQR" />
          </div>
          <div onClick={handleDownloadQr} className="qrlink" style={{ marginTop: "1em" }}>
            {" "}
            <span  className="text">
              Download QR code
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              color="#717e91"
              fill="none"
            >
              <path
                d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
