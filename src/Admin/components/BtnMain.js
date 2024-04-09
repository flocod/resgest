import React from 'react';
import { Link } from "react-router-dom";

const BtnMain = ({to,text}) => {
    return (
        <Link to={to} className="btn_main link">
         {text}
        </Link>
      );
};

export default BtnMain;