import { useState } from "react";
import React from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  // using this without pressing + BUTTON ONLY  press ENTER button we can add a list
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
          // the value of ENTER keyword is 13 that's why we have to check this condition
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        
        onKeyDown={handleEnterPress}
      />

      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          // jbb + pe click kre toh ek task add ho jaye 
          setInputText("");
          // task add hone k baad input-box se remove v ho jaye
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
