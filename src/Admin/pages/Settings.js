import React, { useState, useRef, useEffect } from "react";
import AsideMenu from "../components/AsideMenu";
import Bar from "../components/Bar";
import { connect } from "react-redux";
import { increment, decrement, menuio } from "../../redux/action";
// import BtnMain from "../components/BtnMain";
import {
  getEstablishment,
  updateEstablishment,
  updateEstablishmentOpenDays,
} from "../API/api";
import { getUserData } from "../../utils";

function Day(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked || false); // Initialize isChecked based on props or default to false
  const [opentime, setOpenTime] = useState(
    props.openDays[props.day].open === "closed"
      ? "00:00"
      : props.openDays[props.day].open
  );
  const [closetime, setCloseTime] = useState(
    props.openDays[props.day].close === "closed"
      ? "00:00"
      : props.openDays[props.day].close
  );

  const handleCheckboxChange = (event) => {
    console.log("event.target.checked", event.target.checked);
    setIsChecked(event.target.checked);
  };

  const handleOpenTimeChange = (event) => {
    setOpenTime(event.target.value);
  };
  const handleCloseTimeChange = (event) => {
    setCloseTime(event.target.value);
  };
  return (
    <div className="day">
      <div className="checkDay">
        <input
          id={props.day}
          type="checkbox"
          checked={isChecked}
          active={`${isChecked}`}
          value={props.day}
          name={props.day}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={props.day}>{props.day}</label>
      </div>

      <div className="containHours">
        <div className="itemHours openHours">
          <label htmlFor={`${props.day}Open`}>Open</label>
          <input
            onChange={handleOpenTimeChange}
            type="time"
            id={`${props.day}Open`}
            name={`${props.day}Open`}
            value={opentime}
          />
        </div>
        <div className="itemHours closeHours">
          <label htmlFor={`${props.day}Close`}>Close</label>
          <input
            onChange={handleCloseTimeChange}
            type="time"
            id={`${props.day}Close`}
            name={`${props.day}Close`}
            value={closetime}
          />
        </div>
      </div>
    </div>
  );
}

const Settings = () => {
  // let openDays = '{"Monday": {"open": "08:00", "close": "22:00"}, "Tuesday": {"open": "08:00", "close": "22:00"}, "Wednesday": {"open": "08:00", "close": "22:00"}, "Thursday": {"open": "08:00", "close": "22:00"}, "Friday": {"open": "08:00", "close": "22:00"}, "Saturday": {"open": "09:00", "close": "22:00"}, "Sunday": {"open": "closed", "close": "closed"}}';
  const openDaysBase93 =
    "77ù92ù48ù24ù23ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù8ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù55ù30ù14ù28ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù8ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù58ù14ù13ù23ù14ù28ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù8ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù55ù17ù30ù27ù28ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù8ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù41ù27ù18ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù8ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù54ù10ù29ù30ù27ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù0ù9ù80ù0ù0ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù2ù2ù80ù0ù0ù92ù78ù83ù94ù92ù54ù30ù23ù13ù10ù34ù92ù80ù94ù77ù92ù24ù25ù14ù23ù92ù80ù94ù92ù12ù21ù24ù28ù14ù13ù92ù83ù94ù92ù12ù21ù24ù28ù14ù92ù80ù94ù92ù12ù21ù24ù28ù14ù13ù92ù78ù78ù";
  // let openDays = "{\n    \"Monday\": {\n      \"open\": \"08:00\",\n      \"close\": \"22:00\"\n    },\n    \"Tuesday\": {\n      \"open\": \"08:00\",\n      \"close\": \"22:00\"\n    },\n    \"Wednesday\": {\n      \"open\": \"08:00\",\n      \"close\": \"22:00\"\n    },\n    \"Thursday\": {\n      \"open\": \"08:00\",\n      \"close\": \"22:00\"\n    },\n    \"Friday\": {\n      \"open\": \"08:00\",\n      \"close\": \"22:00\"\n    },\n    \"Saturday\": {\n      \"open\": \"09:00\",\n      \"close\": \"22:00\"\n    },\n    \"Sunday\": {\n      \"open\": \"closed\",\n      \"close\": \"closed\"\n    }\n  }";

  // const openDays = {
  //   Monday: {
  //     open: "08:00",
  //     close: "22:00",
  //   },
  //   Tuesday: {
  //     open: "08:00",
  //     close: "22:00",
  //   },
  //   Wednesday: {
  //     open: "08:00",
  //     close: "22:00",
  //   },
  //   Thursday: {
  //     open: "08:00",
  //     close: "22:00",
  //   },
  //   Friday: {
  //     open: "08:00",
  //     close: "22:00",
  //   },
  //   Saturday: {
  //     open: "09:00",
  //     close: "22:00",
  //   },
  //   Sunday: {
  //     open: "closed",
  //     close: "closed",
  //   },
  // };

  const base93String = getUserData().ESTABLISSEMENT.ESTABLISHMENT_OPENDAYS;
  console.log(
    "base93String-------------->",
    getUserData().ESTABLISSEMENT.ESTABLISHMENT_OPENDAYS
  );
  // const regex = /(?<=})|(?="),/g;
  // const cleanString = jsonString.replace(regex, "");
  // console.log("cleanString",cleanString)
  // let openDays = JSON.parse(jsonString);
  //  openDays = JSON.parse(`${openDays + ""}`);

  // console.log("openDays",openDays);

  function convertToBase93(inputString) {
    // Create the base 63 mapping table
    const base63Mapping = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
      g: 16,
      h: 17,
      i: 18,
      j: 19,
      k: 20,
      l: 21,
      m: 22,
      n: 23,
      o: 24,
      p: 25,
      q: 26,
      r: 27,
      s: 28,
      t: 29,
      u: 30,
      v: 31,
      w: 32,
      x: 33,
      y: 34,
      z: 35,
      // Uppercase characters
      A: 36,
      B: 37,
      C: 38,
      D: 39,
      E: 40,
      F: 41,
      G: 42,
      H: 43,
      I: 44,
      J: 45,
      K: 46,
      L: 47,
      M: 48,
      N: 49,
      O: 50,
      P: 51,
      Q: 52,
      R: 53,
      S: 54,
      T: 55,
      U: 56,
      V: 57,
      W: 58,
      X: 59,
      Y: 60,
      Z: 61,
      // Special characters (unchanged)
      "!": 62,
      "@": 63,
      "#": 64,
      $: 65,
      "%": 66,
      "^": 67,
      "&": 68,
      "*": 69,
      "(": 70,
      ")": 71,
      "-": 72,
      "+": 73,
      "=": 74,
      "[": 75,
      "]": 76,
      "{": 77,
      "}": 78,
      ";": 79,
      ":": 80,
      "<": 81,
      ">": 82,
      ",": 83,
      ".": 84,
      "/": 85,
      "?": 86,
      "`": 87,
      "~": 88,
      "|": 89,
      "\\": 90,
      "'": 91,
      '"': 92,
      _: 93,
      " ": 94,
    };

    // Convert the string character by character
    let base63Digits = [];
    for (const char of inputString) {
      if (char in base63Mapping) {
        base63Digits.push(base63Mapping[char] + "ù");
      } else {
        console.error(`Invalid character: ${char}`);
        return;
      }
    }

    // Pad the result to the original string's length
    const paddedLength = inputString.length;
    while (base63Digits.length < paddedLength) {
      base63Digits.unshift(0);
    }

    // Join the base 33 digits into a string
    const base63String = base63Digits.join("");
    return base63String;
  }

  function convertFromBase93(base93String) {
    // Inverted base 93 mapping (reverse the key-value pairs)
    const base63Mapping = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
      g: 16,
      h: 17,
      i: 18,
      j: 19,
      k: 20,
      l: 21,
      m: 22,
      n: 23,
      o: 24,
      p: 25,
      q: 26,
      r: 27,
      s: 28,
      t: 29,
      u: 30,
      v: 31,
      w: 32,
      x: 33,
      y: 34,
      z: 35,
      // Uppercase characters
      A: 36,
      B: 37,
      C: 38,
      D: 39,
      E: 40,
      F: 41,
      G: 42,
      H: 43,
      I: 44,
      J: 45,
      K: 46,
      L: 47,
      M: 48,
      N: 49,
      O: 50,
      P: 51,
      Q: 52,
      R: 53,
      S: 54,
      T: 55,
      U: 56,
      V: 57,
      W: 58,
      X: 59,
      Y: 60,
      Z: 61,
      // Special characters (unchanged)
      "!": 62,
      "@": 63,
      "#": 64,
      $: 65,
      "%": 66,
      "^": 67,
      "&": 68,
      "*": 69,
      "(": 70,
      ")": 71,
      "-": 72,
      "+": 73,
      "=": 74,
      "[": 75,
      "]": 76,
      "{": 77,
      "}": 78,
      ";": 79,
      ":": 80,
      "<": 81,
      ">": 82,
      ",": 83,
      ".": 84,
      "/": 85,
      "?": 86,
      "`": 87,
      "~": 88,
      "|": 89,
      "\\": 90,
      "'": 91,
      '"': 92,
      _: 93,
      " ": 94,
    };

    const invertedMapping = {};
    for (const key in base63Mapping) {
      invertedMapping[base63Mapping[key]] = key;
    }

    // Split the base 93 string into digits
    const base93Digits = base93String.split("ù");
    base93Digits.pop();
    console.log(base93Digits);
    // Convert each digit to its character representation
    let decodedString = "";
    for (const digit of base93Digits) {
      const char = invertedMapping[digit];
      if (char !== undefined) {
        decodedString += char;
      } else {
        console.error(`Invalid base 93 digit: ${digit}`);
        return;
      }
    }

    return decodedString;
  }

  let openDays = convertFromBase93(String(base93String));
  console.log("openDays", openDays);
  openDays = JSON.parse(openDays);
  console.log("openDays", openDays);
  // try {
  //   // Assuming getUserData() returns a dictionary
  //   const user_data = getUserData();

  //   // Check if ESTABLISSEMENT and ESTABLISHMENT_OPENDAYS exist
  //   if ('ESTABLISSEMENT' in user_data && 'ESTABLISHMENT_OPENDAYS' in user_data['ESTABLISSEMENT']) {
  //     const openDaysJson = user_data['ESTABLISSEMENT']['ESTABLISHMENT_OPENDAYS'];
  //     console.log(openDaysJson);
  //     // Try parsing the JSON string
  //     try {
  //       const openDays = JSON.parse(openDaysJson);
  //       console.log("openDays Objet", openDays); // Use optional chaining for safer access
  //       console.log("openDays", openDays?.Monday); // Use optional chaining for safer access
  //     } catch (jsonError) {
  //       console.error("Error: Invalid JSON format in ESTABLISHMENT_OPENDAYS", jsonError);
  //     }
  //   } else {
  //     console.error("Error: ESTABLISSEMENT or ESTABLISHMENT_OPENDAYS not found in user data");
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  // }

  const [isPasswordHide, setPasswordHide] = useState(false);
  const [selectedInputFile, setSelectedInputFile] = useState("");
  const [isEstFetch, setIsEstFetch] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    est_email: "",
    est_name: "",
    est_phone: "",
    est_location: "",
    est_location_link: "",
    est_description: "",
    est_logo: "",
    est_cover: "",
  });

  const establishmentID = getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID;

  let logo_input = useRef();
  let cover_input = useRef();
  let formUpdateSetting = useRef();
  let formUpdateOpenDays = useRef();

  const handlePasswordHide = () => {
    setPasswordHide(!isPasswordHide);
    const input = document.querySelector(".password");

    if (isPasswordHide) {
      input.type = "password";
    } else {
      input.type = "text";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeInputFileImage = (evt) => {
    evt.stopPropagation();
    let picImg = document.querySelector(`.${selectedInputFile}`);
    console.log("selectedInputFile :", selectedInputFile);
    console.log("picImg", picImg);
    if (picImg) {
      let file = evt.target.files[0];
      if (file) {
        let src = URL.createObjectURL(file);
        picImg.src = src;
        picImg.classList.add("active");
      }
    }

    const { name } = evt.target;
    setFormData({
      ...formData,
      [name]: evt.target.files[0],
    });
  };

  const handleClickLogo_btn = () => {
    logo_input.current.click();
    setSelectedInputFile("logoIMG");
  };

  const handleClickCover_btn = () => {
    cover_input.current.click();
    setSelectedInputFile("coverIMG");
  };

  const fn_getEstablishment = async () => {
    console.log("res fefef -------------------");
    try {
      console.log(getUserData());
      getEstablishment(getUserData().ESTABLISSEMENT.ESTABLISHMENT_ID).then(
        (res) => {
          if (res) {
            console.log("res fefef -------------------", res);
            const userType =
              getUserData().user.USER_TYPE === 1 ? "Owner" : "Admin";
            setFormData({
              user_email: getUserData().user.USER_EMAIL + ` (${userType})`,
              est_email: res.data.ESTABLISHMENT_EMAIL,
              est_name: res.data.ESTABLISHMENT_NAME,
              est_phone: res.data.ESTABLISHMENT_PHONE,
              est_location: res.data.ESTABLISHMENT_LOCATION,
              est_location_link: res.data.ESTABLISHMENT_LOCATION_LINK,
              est_description: res.data.ESTABLISHMENT_DESCRIPTION,
              est_logo: res.data.ESTABLISHMENT_LOGO,
              est_cover: res.data.ESTABLISHMENT_COVER,
              est_openDays: res.data.ESTABLISHMENT_OPENDAYS,
            });
            console.log("res", res);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formUpdateSetting.current;

    console.log("form", form);

    const formDataToSend = new FormData(form);

    const newFormData = new FormData();
    newFormData.append("ESTABLISHMENT_ID", establishmentID);
    newFormData.append("USER_ID", getUserData().user.USER_ID);

    // setFormData({
    //   user_email: getUserData().user.USER_EMAIL,
    //   est_email: res.data.ESTABLISHMENT_EMAIL,
    //   est_name: res.data.ESTABLISHMENT_NAME,
    //   est_phone: res.data.ESTABLISHMENT_PHONE,
    //   est_location: res.data.ESTABLISHMENT_LOCATION,
    //   est_location_link: res.data.ESTABLISHMENT_LOCATION_LINK,
    //   est_description: res.data.ESTABLISHMENT_DESCRIPTION,
    //   est_logo: res.data.ESTABLISHMENT_LOGO,
    //   est_cover: res.data.ESTABLISHMENT_COVER,
    // })

    for (const [key, value] of formDataToSend.entries()) {
      switch (key) {
        case "user_email":
          newFormData.append("USER_EMAIL", value);
          break;
        case "est_email":
          newFormData.append("ESTABLISHMENT_EMAIL", value);
          break;
        case "est_name":
          newFormData.append("ESTABLISHMENT_NAME", value);
          break;
        case "est_phone":
          newFormData.append("ESTABLISHMENT_PHONE", value);
          break;
        case "est_location":
          newFormData.append("ESTABLISHMENT_LOCATION", value);
          break;
        case "est_location_link":
          newFormData.append("ESTABLISHMENT_LOCATION_LINK", value);
          break;
        case "est_description":
          newFormData.append("ESTABLISHMENT_DESCRIPTION", value);
          break;
        case "logo":
          newFormData.append("ESTABLISHMENT_LOGO", value);
          break;
        case "couverture":
          newFormData.append("ESTABLISHMENT_COVER", value);
          break;

        default:
          break;
      }
    }

    updateEstablishment(newFormData).then((resp) => {
      if (resp) {
        console.log(resp);
      }
    });

    // try {
    //   const response = await fetch("/api/add-meal", {
    //     method: "POST",
    //     body: formDataObj,
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const handleSubmitOpenDays = async (e) => {
    e.preventDefault();

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const form = formUpdateOpenDays.current;

    console.log("form", form);

    const formDataToSend = new FormData(form);

    const newFormData = new FormData();
    const newOpenDays = { ...openDays };
    const filterCloseDays = { ...openDays };
    const activeDays = [];
    for (const [key, value] of formDataToSend.entries()) {
      for (let i = 0; i < days.length; i++) {
        if (`${days[i]}Open` === key) {
          newOpenDays[days[i]].open = value;
        } else if (`${days[i]}Close` === key) {
          newOpenDays[days[i]].close = value;
        } else if (days[i] === key) {
          // checkboxValue = formDataToSend.get(`${days[i]}`);
          const checkboxValue = document
            .getElementById(days[i])
            .getAttribute("active");
          console.log("checkboxValue : ", checkboxValue);
          activeDays.push(days[i]);
          delete filterCloseDays[days[i]];
        }
      }
    }

    Object.keys(filterCloseDays).forEach((key) => {
      newOpenDays[`${key}`].open = "closed";
      newOpenDays[`${key}`].close = "closed";
    });

    console.log("newOpenDays", newOpenDays);
    newFormData.append(
      "ESTABLISHMENT_OPENDAYS",
      convertToBase93(JSON.stringify({ ...newOpenDays }))
    );
    newFormData.append("ESTABLISHMENT_ID", establishmentID);

    await updateEstablishmentOpenDays(newFormData).then((resp) => {
      if (resp) {
        console.log(resp);
      //! mise a jour du localStorage CurrentUser
       const CurrentUser = JSON.parse(localStorage.getItem('CurrentUser'));
       console.log(CurrentUser)
       console.log('resp.data========>',resp.data)
       delete CurrentUser.ESTABLISSEMENT;
       CurrentUser['ESTABLISSEMENT']={...resp.data};
       localStorage.setItem('CurrentUser',JSON.stringify(CurrentUser));
      }
    });
  };

  useEffect(() => {
    if (!isEstFetch) {
      fn_getEstablishment();
      setIsEstFetch(true);
    }
  }, [isEstFetch]);

  return (
    <main className="adminConnexion dashboard AddMenu SettingsPage">
      <div className="main_container dashboard_container topCorrect">
        <div className="app_container">
          <AsideMenu></AsideMenu>

          <section className="appSide">
            <div className="appSide__struct">
              <Bar></Bar>
              <div className="titlePage">
                <div className="text">
                  <div className="t1">Settings</div>
                  <div className="t2">All général settings</div>
                </div>
                {/* <BtnMain to="/"></BtnMain> */}
              </div>

              <div className="flex_Categories">
                <div className="contentForm createaccount">
                  <form
                    ref={formUpdateSetting}
                    onSubmit={handleSubmit}
                    className="contentForm__struct"
                  >
                    <div className="head_statItem">
                      <span className="title">Establishment configuration</span>
                      <div className="Pmargin"></div>
                    </div>

                    <div className="flexContainer">
                      <div className="inputContainter">
                        <div className="input">
                          <label htmlFor="">
                            Your email <sup>*</sup>
                          </label>
                          <input
                            style={{ opacity: 0.4 }}
                            readOnly
                            onChange={handleChange}
                            name="user_email"
                            value={formData.user_email}
                            type="email"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Phone Number <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            name="est_phone"
                            value={formData.est_phone}
                            type="tel"
                            placeholder="Enter your number"
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Location <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            name="est_location"
                            value={formData.est_location}
                            type="tel"
                            placeholder="Enter your Location"
                          />
                        </div>
                      </div>

                      <div className="inputContainter">
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Name <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Your restaurant name"
                            name="est_name"
                            value={formData.est_name}
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Location link <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            type="text"
                            placeholder="https://map.google.com/"
                            name="est_location_link"
                            value={formData.est_location_link}
                          />
                        </div>
                        <div className="input">
                          <label htmlFor="">
                            Restaurant Email <sup>*</sup>
                          </label>
                          <input
                            onChange={handleChange}
                            type="Email"
                            placeholder="Your restaurant email"
                            name="est_email"
                            value={formData.est_email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inputContainter inputMargin">
                      <div className="input inputTextarea">
                        <label htmlFor="">
                          Restaurant Description <sup>*</sup>
                        </label>
                        <textarea
                          onChange={handleChange}
                          id=""
                          cols="20"
                          rows="4"
                          placeholder="Enter your Restaurant description"
                          name="est_description"
                          value={formData.est_description}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flexContainer ">
                      <div
                        className="inputContainter inputMargin"
                        onClick={handleClickCover_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Restaurant Couverture <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                              style={
                                formData.est_cover
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="coverIMG"
                              src={formData.est_cover}
                              alt="couverture du restaurant"
                            />
                            <svg
                              width={28}
                              height={27}
                              viewBox="0 0 28 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                                fill="#717E91"
                              />
                              <path
                                d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div
                        className="inputContainter inputMargin"
                        onClick={handleClickLogo_btn}
                      >
                        <div className="input inputFile">
                          <label htmlFor="">
                            Restaurant logo <sup>*</sup>
                          </label>
                          <div className="image">
                            <img
                              style={
                                formData.est_logo
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                              }
                              className="logoIMG"
                              src={formData.est_logo}
                              alt="Logo du restaurant"
                            />
                            <svg
                              width={28}
                              height={27}
                              viewBox="0 0 28 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5 6.875C27.0178 6.875 27.4375 6.45526 27.4375 5.9375C27.4375 5.41974 27.0178 5 26.5 5V6.875ZM16.5 5C15.9822 5 15.5625 5.41974 15.5625 5.9375C15.5625 6.45526 15.9822 6.875 16.5 6.875V5ZM22.4375 0.9375C22.4375 0.419738 22.0178 0 21.5 0C20.9822 0 20.5625 0.419738 20.5625 0.9375H22.4375ZM20.5625 10.9375C20.5625 11.4553 20.9822 11.875 21.5 11.875C22.0178 11.875 22.4375 11.4553 22.4375 10.9375H20.5625ZM26.5 5H21.5V6.875H26.5V5ZM21.5 5H16.5V6.875H21.5V5ZM20.5625 0.9375V5.9375H22.4375V0.9375H20.5625ZM20.5625 5.9375V10.9375H22.4375V5.9375H20.5625Z"
                                fill="#717E91"
                              />
                              <path
                                d="M13.375 2.1875C7.77707 2.1875 4.97811 2.1875 3.23905 3.92655C1.5 5.66561 1.5 8.46457 1.5 14.0625C1.5 19.6604 1.5 22.4594 3.23905 24.1985C4.97811 25.9375 7.77707 25.9375 13.375 25.9375C18.9729 25.9375 21.7719 25.9375 23.511 24.1985C25.25 22.4594 25.25 19.6604 25.25 14.0625V13.4375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.5 16.1067C2.27377 15.9943 3.05605 15.9388 3.83964 15.9408C7.15456 15.8707 10.3883 16.9036 12.9639 18.8552C15.3525 20.6651 17.0309 23.1561 17.75 25.9375"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25.25 19.5577C23.7807 18.8136 22.261 18.4359 20.7327 18.4376C18.4181 18.4284 16.1269 19.2791 14 20.9374"
                                stroke="#717E91"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="submit">Update</button>

                    <input
                      onChange={handleChangeInputFileImage}
                      ref={logo_input}
                      type="file"
                      name="logo"
                      className="inputFileVal"
                    />
                    <input
                      onChange={handleChangeInputFileImage}
                      ref={cover_input}
                      type="file"
                      name="couverture"
                      className="inputFileVal"
                    />
                  </form>
                </div>

                <div className="BoxOpenDay ">
                  <form
                    ref={formUpdateOpenDays}
                    onSubmit={handleSubmitOpenDays}
                    className="BoxOpenDay__struct"
                  >
                    <div className="head_statItem">
                      <span className="title">Open Days</span>
                    </div>

                    <div className="containDays">
                      <Day
                        openDays={openDays}
                        day="Monday"
                        isChecked={
                          openDays.Monday.close === openDays.Monday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Tuesday"
                        isChecked={
                          openDays.Tuesday.close === openDays.Tuesday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Wednesday"
                        isChecked={
                          openDays.Wednesday.close === openDays.Wednesday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Thursday"
                        isChecked={
                          openDays.Thursday.close === openDays.Thursday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Friday"
                        isChecked={
                          openDays.Friday.close === openDays.Friday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Saturday"
                        isChecked={
                          openDays.Saturday.close === openDays.Saturday.open
                            ? false
                            : true
                        }
                      ></Day>
                      <Day
                        openDays={openDays}
                        day="Sunday"
                        isChecked={
                          openDays.Sunday.close === openDays.Sunday.open
                            ? false
                            : true
                        }
                      ></Day>
                    </div>

                    <button type="submit">Update</button>
                  </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
