import React from 'react';

function MenuUserView(props) {
    return (
      <div className="menu_user_view">
        <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9275 5.18633C10.7977 2.91307 8.56103 1.375 5.99999 1.375C3.43895 1.375 1.20166 2.91414 0.0724886 5.18654C0.0248307 5.28376 0 5.39117 0 5.50011C0 5.60904 0.0248307 5.71645 0.0724886 5.81367C1.20228 8.08693 3.43895 9.625 5.99999 9.625C8.56103 9.625 10.7983 8.08586 11.9275 5.81346C11.9751 5.71624 12 5.60883 12 5.49989C12 5.39096 11.9751 5.28355 11.9275 5.18633ZM5.99999 8.59375C5.40664 8.59375 4.82663 8.4123 4.33328 8.07236C3.83993 7.73241 3.45541 7.24924 3.22835 6.68393C3.00129 6.11862 2.94188 5.49657 3.05763 4.89644C3.17339 4.29631 3.45911 3.74506 3.87867 3.31239C4.29823 2.87972 4.83277 2.58507 5.41472 2.4657C5.99666 2.34632 6.59986 2.40759 7.14804 2.64175C7.69622 2.87591 8.16475 3.27244 8.4944 3.7812C8.82404 4.28997 8.99999 4.88811 8.99999 5.5C9.00018 5.90633 8.92271 6.30872 8.77202 6.68416C8.62132 7.0596 8.40035 7.40073 8.12174 7.68805C7.84312 7.97537 7.51233 8.20325 7.14827 8.35865C6.7842 8.51406 6.39401 8.59395 5.99999 8.59375ZM5.99999 3.4375C5.82147 3.44007 5.64411 3.46746 5.4727 3.51893C5.61399 3.71694 5.6818 3.96062 5.66381 4.20577C5.64583 4.45092 5.54325 4.6813 5.37468 4.85515C5.2061 5.02899 4.9827 5.13477 4.74498 5.15332C4.50726 5.17186 4.27096 5.10194 4.07895 4.95623C3.96961 5.37165 3.98934 5.81197 4.13538 6.21522C4.28142 6.61846 4.5464 6.96433 4.89303 7.20413C5.23966 7.44394 5.65049 7.56561 6.06769 7.55202C6.48489 7.53842 6.88745 7.39026 7.21871 7.12837C7.54998 6.86648 7.79326 6.50405 7.91433 6.09211C8.03539 5.68016 8.02814 5.23943 7.89359 4.83196C7.75905 4.42449 7.50398 4.07078 7.16429 3.82063C6.8246 3.57048 6.41739 3.43649 5.99999 3.4375Z"
            fill="#7E7E7E"
          />
        </svg>
        <div className="text">{props.views} Vues</div>
      </div>
    );
  }

export default MenuUserView;