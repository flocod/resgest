// import React, { useState } from "react"; // Import useState for state management
// import { setUserState } from "../API/api";
// import { getUserData } from "../../utils";
// function ToggleBtn(props) {
//   const [isOn, setIsOn] = useState(props.state); // Initialize state for toggle status

//   const handleClick = async () => {
//     setIsOn(!isOn); // Toggle state on click

//     const userDATA = getUserData();
//     const formData = new FormData();
//     console.log("!isOn",!isOn);

//      const userState = !isOn === false ? 3 : 1;

//     formData.append("USER_STATE",userState);
//     formData.append("USER_ID",userDATA.user.USER_ID);
//     setUserState(formData).then((res)=>{
//       if(res){
//         console.log(res);
//       }
//     })
//   };

//   const toggleClass = isOn ? "ToggleOn" : "ToggleOff"; // Dynamically set class based on state

//   return (
//     <div onClick={handleClick} className={`statutToggle ${toggleClass}`}>
//       <span className="text">
//         <div className="off">Off</div>
//         <div className="on">On</div>
//       </span>
//       <div className="switch">
//         {" "}
//         {/* Add onClick handler */}
//         <div className="spanSwitch"></div>
//       </div>
//     </div>
//   );
// }

// export default ToggleBtn;

import React, { useState } from "react";
import { setUserState } from "../API/api";
import { getUserData } from "../../utils";


function ToggleBtn(props) {
  const [isOn, setIsOn] = useState(props.state);

  const stateUser = {
    activer : 2,
    desactiver : 3,
  }

  const handleClick = async () => {
    const userState = isOn ? stateUser.desactiver : stateUser.activer; // Modify user state based on current toggle state

    const formData = new FormData();
    formData.append("USER_STATE", userState);
    formData.append("USER_ID",props.id);

    setUserState(formData).then((res) => {
      if (res) {
        console.log(res);
        setIsOn(!isOn); // Update toggle state only if the request is successful
        console.log("Modification du state");
      }
    });
  };

  const toggleClass = isOn ? "ToggleOn" : "ToggleOff";

  return (
    <div onClick={handleClick} className={`statutToggle ${toggleClass}`}>
      <span className="text">
        <div className="off">Off</div>
        <div className="on">On</div>
      </span>
      <div className="switch">
        <div className="spanSwitch"></div>
      </div>
    </div>
  );
}

export default ToggleBtn;
