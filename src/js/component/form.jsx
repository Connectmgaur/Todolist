
import React, { useState } from "react";

const Form =()=>{

  const [todo,setTodo]=useState('');
  const [todos,setTodos]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);//spread operator... This syntax is used in the setTodos function to create a new array that includes all the existing todos
      setTodo("");

    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

 
return (
<div classname="container d-flex">
  <h1>Todos</h1>
   
<form className="TodoForm" onSubmit={handleSubmit}>
 <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} className="todo-input" placeholder="What is the task today?"/>
  
  <button type="submit" className="btn btn-primary">Submit</button>

  </form>
  <ul className="List">
        {todos.map((item, index) => (
          <li key={index}>
            <label>{item}</label>
            <button className="btn-delete" onClick={() => handleDelete(index)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>
          
        ))}
        
      </ul>
      <div>{todos.length}</div>
    </div>
  );
};
        

export default Form;
