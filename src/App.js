import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from "react";

function App() {

   const [listTodo , setListTodo] = useState([])

   let addListItem = (inputText) => {
    // first of all we have to check whether input-box is blank or not if blank then add a Item
    if(inputText !== '')
    setListTodo([...listTodo , inputText])
   }

   const deleteListItem = (key) => {
    // first of all we store all list in newListTodo
    let newListTodo = [...listTodo]
    newListTodo.splice(key , 1)
    setListTodo([...newListTodo])
   }

  return (
     <div className="main-container">
      <div className="center-container">
         <TodoInput addList =  {addListItem}/>
         <h1 className='app-heading'>TODO</h1>
         <hr />
         {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index = {i} item = {listItem} deleteItem = {deleteListItem}/>
          )
         })}
      </div>
     </div>
  );
}

export default App;
