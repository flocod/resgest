import React, {useState} from "react";
import "./index.scss";


const AlertPopUp = (props) => {
  const { icon, title, text } = props;

  const [state, setstate] = useState(true);

  const handleSetstate = ()=>{
  

    const box = document.querySelector('.alert_container');
    if(state){
      box.classList.add('alert_container_active');
    }else{
      box.classList.remove('alert_container_active');
    }
    setstate(!state);
  }

  const ico_success = (
    <svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5811 5.69896C20.893 4.01073 20.0489 3.16663 19 3.16663C17.951 3.16663 17.1069 4.01073 15.4187 5.69896C14.4056 6.71203 13.4017 7.18237 11.9574 7.18237C10.6963 7.18237 8.90214 6.93778 7.91663 7.93157C6.9389 8.91751 7.1824 10.7043 7.1824 11.9574C7.1824 13.4017 6.71203 14.4056 5.69893 15.4187C4.01073 17.1069 3.16664 17.951 3.16663 19C3.16666 20.0488 4.01076 20.893 5.69898 22.5811C6.83388 23.7161 7.1824 24.4488 7.1824 26.0425C7.1824 27.3036 6.93782 29.0978 7.93165 30.0833C8.91758 31.061 10.7044 30.8175 11.9574 30.8175C13.4955 30.8175 14.2362 31.1183 15.3339 32.216C16.2686 33.1508 17.5216 34.8333 19 34.8333C20.4783 34.8333 21.7314 33.1508 22.666 32.216C23.7637 31.1183 24.5044 30.8175 26.0425 30.8175C27.2955 30.8175 29.0823 31.061 30.0682 30.0833M30.0682 30.0833C31.0621 29.0978 30.8175 27.3036 30.8175 26.0425C30.8175 24.4488 31.166 23.7161 32.3009 22.5811C33.9892 20.893 34.8333 20.0488 34.8333 19C34.8333 17.951 33.9892 17.1069 32.3009 15.4187M30.0682 30.0833H30.0833"
        stroke="#00B031"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6666 16.3205C12.6666 16.3205 16.2291 15.8333 19 22.1666C19 22.1666 27.0097 6.33329 34.8333 3.16663"
        stroke="#00B031"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ico_error = (
    <svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.42601 15.3312C12.2477 8.5689 14.1585 5.18772 16.7806 4.31736C18.223 3.83855 19.7769 3.83855 21.2193 4.31736C23.8415 5.18772 25.7523 8.5689 29.5739 15.3312C33.3956 22.0935 35.3064 25.4747 34.7332 28.2297C34.4178 29.7454 33.6409 31.1201 32.5137 32.157C30.4649 34.0416 26.6433 34.0416 19 34.0416C11.3567 34.0416 7.535 34.0416 5.48615 32.157C4.35901 31.1201 3.58208 29.7454 3.26673 28.2297C2.69352 25.4747 4.60435 22.0935 8.42601 15.3312Z"
        stroke="#C92320"
        strokeWidth="1.5"
      />
      <path
        d="M18.9873 25.3334H19.0016"
        stroke="#C92320"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 20.5834V14.25"
        stroke="#C92320"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ico_warning = (
    <svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 25.3334H19.0146"
        stroke="#FF6B01"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 20.5833V12.6666"
        stroke="#FF6B01"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9919 6.78304C22.1332 6.09324 21.308 3.33245 19.1896 3.1737C19.0638 3.16427 18.9371 3.16427 18.8112 3.1737C16.6929 3.33246 15.8677 6.09308 14.009 6.78304C12.0409 7.51326 9.34987 6.01644 7.68343 7.68291C6.07944 9.28687 7.49883 12.0807 6.78356 14.0085C6.05235 15.9782 2.99458 16.793 3.17423 19.1892C3.33297 21.3075 6.09377 22.1327 6.78356 23.9914C7.49886 25.9191 6.07936 28.7131 7.68343 30.317C9.34964 31.9834 12.0409 30.4872 14.009 31.2168C15.8672 31.9076 16.6932 34.6677 18.8112 34.8262C18.9371 34.8357 19.0638 34.8357 19.1896 34.8262C21.3077 34.6677 22.1338 31.9075 23.9919 31.2168C25.9198 30.5021 28.7139 31.9211 30.3175 30.317C32.039 28.5957 30.3803 25.8053 31.2898 23.8165C32.1304 21.9853 35.0016 21.1278 34.8266 18.8107C34.6681 16.6927 31.9081 15.8665 31.2173 14.0085C30.4877 12.0403 31.9839 9.34911 30.3175 7.68291C28.6512 6.01636 25.96 7.5133 23.9919 6.78304Z"
        stroke="#FF6B01"
        strokeWidth="1.5"
      />
    </svg>
  );

  const ico_info = (
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33 18C33 9.71572 26.2842 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18Z"
        stroke="#00ACE2"
        strokeWidth="1.5"
      />
      <path
        d="M18.3633 25.5V18C18.3633 17.2929 18.3633 16.9394 18.1435 16.7196C17.9239 16.5 17.5704 16.5 16.8633 16.5"
        stroke="#00ACE2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.988 12H18.0012"
        stroke="#00ACE2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  function Template(props) {
    return (
      <div className={`alert_container`}>
        <div className="alert_container_layer" onClick={handleSetstate}></div>
        <div className="alert_box success">
          <div className="struct">
            {props.icon}
            <div className="alert_text">{props.title}</div>
            <div className="alert_status">
              <div className="alert_status_indicator">{props.text}</div>
              <div className="alert_status_text" onClick={handleSetstate}>Ok</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {icon === "success" ? (
        <Template state={state} icon={ico_success} text={text} title={title} />
      ) : icon === "error" ? (
        <Template state={state} icon={ico_error} text={text} title={title} />
      ) : icon === "info" ? (
        <Template state={state} icon={ico_info} text={text} title={title} />
      ) : icon === "warning" ? (
        <Template state={state} icon={ico_warning} text={text} title={title} />
      ) : (
        ""
      )}
    </>
  );
};

export default AlertPopUp;
