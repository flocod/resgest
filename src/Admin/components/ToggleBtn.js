import React, { useState } from "react";
import { setUserState,setCategoryState,setMenuState } from "../API/api";
import { getUserData } from "../../utils";


function ToggleBtn(props) {
  const [isOn, setIsOn] = useState(props.state);

  const stateUser = {
    activer : 2,
    desactiver : 3,
  }
  const stateMenu = {
    activer : 1,
    desactiver : 0,
  }
  const stateCategory = {
    activer : 1,
    desactiver : 0,
  }

  const handleClickUserAdmin = async () => {
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
  const handleClickCategory = async () => {
    const categoryState = isOn ? stateCategory.desactiver : stateCategory.activer; // Modify user state based on current toggle state

    const formData = new FormData();
    formData.append("CATEGORY_STATUS", categoryState);
    formData.append("CATEGORY_ID",props.id);

    setCategoryState(formData).then((res) => {
      if (res) {
        console.log(res);
        setIsOn(!isOn); // Update toggle state only if the request is successful
        console.log("Modification du state");
      }
    });
  };
  const handleClickMenu = async () => {
    const temp = isOn ? stateMenu.desactiver : stateMenu.activer; // Modify user state based on current toggle state

    const formData = new FormData();
    formData.append("ARTICLE_STATUS", temp);
    formData.append("ARTICLE_ID",props.id);

    setMenuState(formData).then((res) => {
      if (res) {
        console.log(res);
        setIsOn(!isOn); // Update toggle state only if the request is successful
        console.log("Modification du state");
      }
    });
  };

  const userHandleClick = async () => {
    switch (props.actionType) {
      case "toggleAdmin":
        return await handleClickUserAdmin();
      case "toggleCategory":
        return await handleClickCategory();
      case "toggleMenu":
        return await handleClickMenu();
      default:
        return null; // ou une action par défaut si nécessaire
    }
  };

  const toggleClass = isOn ? "ToggleOn" : "ToggleOff";

  return (
    <div onClick={userHandleClick} className={`statutToggle ${toggleClass}`}>
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
