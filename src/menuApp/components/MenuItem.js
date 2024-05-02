import React from 'react';
import MenuUserView from './MenuUserView';
import MenuTimePreparation from './MenuTimePreparation';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { incrementArticleView } from '../../Admin/API/api';
function MenuItem(props) {
  const navigate = useNavigate()

  const fn_incrementArticleView = async (id)=>{


      try {
        await incrementArticleView(id).then((res)=>{
            if(res && res.reponse){
              console.log(res.message);
            }else{
              console.log(res.message);
            }
        })
      } catch (error) {
        console.log(error)
      }
  }


  const handleClick = (id)=>{
    const goTo = document.getElementById(id).getAttribute("data-to");
    console.log("goTo : ", goTo)

    fn_incrementArticleView(id).then(()=> navigate(goTo, {isFromHome : true}))

   
  }

    return (
      <div onClick={()=>handleClick(props.id)} id={props.id} data-to={"./details/"+ props.id+"?prev=true"} className={`menu link ${props.categoryId}`} >
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
      </div>
    );
  }

export default MenuItem;