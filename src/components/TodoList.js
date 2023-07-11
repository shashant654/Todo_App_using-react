import React from "react";

function TodoList(props) {
  return (
          // becoz sare list me tasks show kre
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i class="fa-regular fa-trash-can icon-delete"
        onClick={e => {
          // we delete that item which is recieving inside props
          props.deleteItem(props.index)
        }}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;

// for finding the DELETE icon :-
// 1. first of all we have to visit CDNJS FONT AWESOME , COPY THE FIRST LINK AND PASTE IN THE HEAD OF INDEX.HTML 
// 2. AFTER THIS VISIT FONT AWESOME AND FIND DELETE ICON , COPY THE LINK AND PASTE TODOLIST.JS

