import React, { useState } from "react";
import { connect } from "react-redux";
import { menuio } from "../../redux/action";
import { userDeconnection } from "../API/api";
import { getUserData } from "../../utils";
import { useNavigate } from "react-router-dom";
const Bar = ({ menuio, toggleMenu, name }) => {
  const [isActiveDropUser, setIsActiveDropUser] = useState(false);

  const navigate = useNavigate();
  const userdata = getUserData();
  const toggleDropUser = () => {
    setIsActiveDropUser(!isActiveDropUser);
  };


  const handleDeconnection = ()=>{
    const formData = new FormData();
          formData.append("USER_ID", userdata.user.USER_ID)
    userDeconnection(formData, userdata.token)
    .then((res) => {
      localStorage.removeItem('CurrentUser');
      navigate('/admin');
    });
  }

  return (
    <div className="bar_activity">
      <div className="activityBox">
        <div className="activityBox__struct">
          <div className="activity_text">No activity detected...</div>

          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7H12C14.8284 7 16.2426 7 17.1213 7.87868C18 8.75736 18 10.1716 18 13C18 15.8284 18 17.2426 17.1213 18.1213C16.2426 19 14.8284 19 12 19H11C11 19 10.5 21 7 21C7 21 8 19.9913 8 18.9827C6.44655 18.9359 5.51998 18.7626 4.87868 18.1213C4 17.2426 4 15.8284 4 13C4 10.1716 4 8.75736 4.87868 7.87868C5.75736 7 7.17157 7 10 7Z"
              stroke="#717E91"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M18 10.5H18.5C19.4346 10.5 19.9019 10.5 20.25 10.701C20.478 10.8326 20.6674 11.022 20.799 11.25C21 11.5981 21 12.0654 21 13C21 13.9346 21 14.4019 20.799 14.75C20.6674 14.978 20.478 15.1674 20.25 15.299C19.9019 15.5 19.4346 15.5 18.5 15.5H18"
              stroke="#717E91"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M4 10.5H3.5C2.56538 10.5 2.09808 10.5 1.75 10.701C1.52197 10.8326 1.33261 11.022 1.20096 11.25C1 11.5981 1 12.0654 1 13C1 13.9346 1 14.4019 1.20096 14.75C1.33261 14.978 1.52197 15.1674 1.75 15.299C2.09808 15.5 2.56538 15.5 3.5 15.5H4"
              stroke="#717E91"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 2.5C12.5 3.32843 11.8284 4 11 4C10.1716 4 9.5 3.32843 9.5 2.5C9.5 1.67157 10.1716 1 11 1C11.8284 1 12.5 1.67157 12.5 2.5Z"
              stroke="#717E91"
              strokeWidth="1.5"
            />
            <path
              d="M8 11V12M14 11V12"
              stroke="#717E91"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 15.5C9 15.5 9.6667 16 11 16C12.3333 16 13 15.5 13 15.5"
              stroke="#717E91"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="left">
        <div className="btn_menu" onClick={menuio}>
          <svg
            width={23}
            height={16}
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1={1}
              y1={1}
              x2={22}
              y2={1}
              stroke="#FF6B01"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <line
              x1={1}
              y1={8}
              x2={22}
              y2={8}
              stroke="#FF6B01"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <line
              x1={1}
              y1={15}
              x2={22}
              y2={15}
              stroke="#FF6B01"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="btn_live">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.32515 1.25C4.58793 1.25493 3.15456 1.32213 2.23854 2.23816C1.25 3.22669 1.25 4.81773 1.25 7.99977C1.25 11.1819 1.25 12.7729 2.23854 13.7614C3.22708 14.75 4.81813 14.75 8.00023 14.75C11.1823 14.75 12.7733 14.75 13.7619 13.7614C14.6779 12.8455 14.7451 11.4121 14.75 8.67485"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.8029 2.02426C15.0234 1.80544 15.0247 1.44928 14.8059 1.22877C14.587 1.00827 14.2309 1.00691 14.0104 1.22574L14.8029 2.02426ZM9.85377 5.35074C9.63327 5.56957 9.63192 5.92572 9.85069 6.14623C10.0695 6.36673 10.4257 6.36809 10.6462 6.14926L9.85377 5.35074ZM10.9999 0.6875C10.6893 0.68753 10.4375 0.939388 10.4375 1.25005C10.4375 1.56071 10.6894 1.81253 11.0001 1.8125L10.9999 0.6875ZM14.1875 5C14.1875 5.31066 14.4393 5.5625 14.75 5.5625C15.0606 5.5625 15.3125 5.31066 15.3125 5H14.1875ZM14.0104 1.22574L9.85377 5.35074L10.6462 6.14926L14.8029 2.02426L14.0104 1.22574ZM14.1195 0.866412C13.5938 0.773322 12.8011 0.73022 12.1685 0.709032C11.8461 0.69824 11.5547 0.692863 11.3439 0.690178C11.2383 0.688843 11.1528 0.688167 11.0935 0.687837C11.0638 0.687665 11.0406 0.687583 11.0248 0.687545C11.0169 0.687523 11.0108 0.687508 11.0066 0.687508C11.0046 0.6875 11.0029 0.6875 11.0018 0.6875C11.0013 0.6875 11.0002 0.6875 10.9999 0.6875C10.9999 0.6875 10.9999 0.6875 11 1.25C11.0001 1.8125 11.0001 1.8125 11.0001 1.8125C11.0003 1.8125 11.0007 1.8125 11.0012 1.8125C11.002 1.8125 11.0034 1.8125 11.0052 1.81251C11.0089 1.81251 11.0145 1.81252 11.0219 1.81254C11.0367 1.81258 11.0586 1.81266 11.0871 1.81282C11.1441 1.81314 11.227 1.81378 11.3295 1.81509C11.5348 1.8177 11.8182 1.82293 12.1308 1.8334C12.7683 1.85475 13.4863 1.89679 13.9233 1.97418L14.1195 0.866412ZM14.75 5C15.3125 5 15.3125 5.00004 15.3125 5C15.3125 4.99969 15.3125 4.99869 15.3125 4.99814C15.3125 4.99702 15.3125 4.99541 15.3125 4.99332C15.3125 4.98914 15.3125 4.98304 15.3124 4.97511C15.3124 4.95927 15.3123 4.93612 15.3121 4.90644C15.3118 4.8471 15.3111 4.7616 15.3098 4.65611C15.3071 4.4453 15.3017 4.15386 15.2909 3.83152C15.2697 3.19893 15.2266 2.40639 15.1336 1.88082L14.0258 2.0768C14.1031 2.51379 14.1452 3.23185 14.1665 3.86922C14.177 4.18185 14.1822 4.46523 14.1849 4.67049C14.1862 4.77304 14.1868 4.85588 14.1872 4.91288C14.1873 4.94137 14.1874 4.96339 14.1874 4.97818C14.1875 4.98556 14.1875 4.99114 14.1875 4.99481C14.1875 4.99665 14.1875 4.998 14.1875 4.99887C14.1875 4.99931 14.1875 4.99981 14.1875 5C14.1875 4.99999 14.1875 5 14.75 5ZM13.9233 1.97418C13.9611 1.98088 13.9817 1.99507 13.9933 2.00665C14.0049 2.01824 14.0191 2.03886 14.0258 2.0768L15.1336 1.88082C15.0405 1.35479 14.6457 0.9596 14.1195 0.866412L13.9233 1.97418Z"
              fill="black"
            />
          </svg>

          <div className="text">Live preview</div>
        </div>

        <div className="btn_notification">
          <svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path
              d="M1.02867 13.154C0.824885 14.49 1.736 15.4172 2.85155 15.8793C7.12836 17.6511 13.08 17.6511 17.3567 15.8793C18.4723 15.4172 19.3834 14.49 19.1797 13.154C19.0544 12.333 18.4352 11.6494 17.9763 10.9818C17.3753 10.0967 17.3156 9.13115 17.3155 8.104C17.3155 4.13445 14.0869 0.916504 10.1042 0.916504C6.12146 0.916504 2.89283 4.13445 2.89283 8.104C2.89274 9.13115 2.83302 10.0967 2.23204 10.9818C1.77322 11.6494 1.15392 12.333 1.02867 13.154Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.27081 17.2085C6.7102 18.8618 8.25983 20.0835 10.1041 20.0835C11.9485 20.0835 13.4981 18.8618 13.9375 17.2085"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="user_btn" onClick={toggleDropUser}>
          <div className="img">
            <svg
              viewBox="0 0 448 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M224 256C294.7 256 352 198.7 352 128C352 57.3 294.7 0 224 0C153.3 0 96 57.3 96 128C96 198.7 153.3 256 224 256ZM313.6 288H296.9C274.7 298.2 250 304 224 304C198 304 173.4 298.2 151.1 288H134.4C60.2 288 0 348.2 0 422.4V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V422.4C448 348.2 387.8 288 313.6 288Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="text">
            {userdata.user.USER_SUBNAME + " " + userdata.user.USER_NAME}
          </div>

          <svg
            width={9}
            height={7}
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.04543 6.19589L0.141223 2.02053C-0.0470742 1.81916 -0.0470742 1.49268 0.141223 1.29133L0.596587 0.804345C0.784562 0.603316 1.08922 0.602929 1.27763 0.803486L4.38637 4.11253L7.49509 0.803486C7.6835 0.602929 7.98816 0.603316 8.17613 0.804345L8.6315 1.29133C8.81979 1.4927 8.81979 1.81918 8.6315 2.02053L4.72731 6.19589C4.53901 6.39724 4.23373 6.39724 4.04543 6.19589Z"
              fill="black"
            />
          </svg>

          <div
            className={`dropUser ${isActiveDropUser ? "dropUserActive" : ""}`}
          >
            <span className="span">Edit Profile</span>
            <span className="span">Settings</span>
            <span onClick={handleDeconnection} className="span">Deconnexion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  menuio: state.menuio,
});

const mapDispatchToProps = {
  menuio,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
