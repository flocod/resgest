import React, { useState } from "react"; // Import useState for state management

function ToggleBtn(props) {
  const [isOn, setIsOn] = useState(props.state); // Initialize state for toggle status

  const handleClick = () => {
    setIsOn(!isOn); // Toggle state on click
  };

  const toggleClass = isOn ? "ToggleOn" : "ToggleOff"; // Dynamically set class based on state

  return (
    <div onClick={handleClick} className={`statutToggle ${toggleClass}`}>
      <span className="text">
        <div className="off">Off</div>
        <div className="on">On</div>
      </span>
      <div className="switch">
        {" "}
        {/* Add onClick handler */}
        <div className="spanSwitch"></div>
      </div>
    </div>
  );
}

export default ToggleBtn;
