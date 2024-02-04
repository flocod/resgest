import React from 'react';

function PanierItem(props) {
    return (
      <div itemID={props.id} className="item">
        <div className="item__struct">
          <div className="nbre">{props.item <10 ? "0"+props.item : props.item }</div>
          <div className="item_name">{props.name}</div>
          <div className="nbre item_price">{ Number(props.price)}</div>
  
          <div className="delete" onClick={() => props.handleClick(props.id)}>
            <svg
              className="vector"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.44773 2.5L4.86918 1.07855C5.04361 0.904119 5.04361 0.621307 4.86918 0.446733L4.55327 0.130824C4.37884 -0.043608 4.09602 -0.043608 3.92145 0.130824L2.5 1.55227L1.07855 0.130824C0.904119 -0.043608 0.621307 -0.043608 0.446733 0.130824L0.130824 0.446733C-0.043608 0.621165 -0.043608 0.903977 0.130824 1.07855L1.55227 2.5L0.130824 3.92145C-0.043608 4.09588 -0.043608 4.37869 0.130824 4.55327L0.446733 4.86918C0.621165 5.04361 0.904119 5.04361 1.07855 4.86918L2.5 3.44773L3.92145 4.86918C4.09588 5.04361 4.37884 5.04361 4.55327 4.86918L4.86918 4.55327C5.04361 4.37884 5.04361 4.09602 4.86918 3.92145L3.44773 2.5Z"
                fill="#FF6B01"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  

export default PanierItem;