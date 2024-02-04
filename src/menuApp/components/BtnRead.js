import React from "react";
import { useState } from "react";


const BtnRead = (props) => {
  const [isPlus, setIsPlus] = useState(true);

  const plus = "Lire Plus +";
  const moin = "Lire moin";

  return (
    <button onClick={props.action} className="btnRead">
      {isPlus ? plus : moin}
    </button>
  );
};

export default BtnRead;
