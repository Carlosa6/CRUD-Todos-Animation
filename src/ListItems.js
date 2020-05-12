import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';


function ListItems(props) {
  const items = props.items;
  const listItems = items.map(it => {
    return (
      <div className="list" key={it.key}>
        <p>
          <input 
            type="text"
            id={it.key}
            value={it.text}
            onChange={
              (e) => {
                props.setUpdate(e.target.value,it.key)
              }
            }
          />
          <span>
            <FontAwesomeIcon
             className="faicons"
             icon="trash"
            onClick={ () => props.deleteItem(it.key) }
            />
          </span>
        </p>
      </div>
    );
  });
  return(
    <div>
      <FlipMove duration={500} easing="ease-in-out">
      {listItems}
      </FlipMove>
    </div> 
  )
}

export default ListItems;
