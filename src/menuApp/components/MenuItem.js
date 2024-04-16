import React from 'react';
import MenuUserView from './MenuUserView';
import MenuTimePreparation from './MenuTimePreparation';
import { NavLink } from 'react-router-dom';


function MenuItem(props) {
  
    
    return (
      <NavLink to={"/details/"+ props.id} className="menu link" >
        <div className="menu_struct">
          <div className="menu_img">
            <img src={props.image} alt={props.image} />
          </div>
          <div className="menu_info">
            <div className="menu_info__name">{props.nom}</div>
            <div className="menu_info__description">
            {props.descr}
            </div>
            <div className="menu_info__price">{props.price}  {props.devise}</div>
            <div className="menu_plus">
              <MenuUserView views={props.views}></MenuUserView>
              <MenuTimePreparation time={props.time}></MenuTimePreparation>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }

export default MenuItem;