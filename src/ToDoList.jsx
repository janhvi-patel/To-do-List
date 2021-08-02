import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const ToDoList = (props) => {
    

    return (
    <>
    <div>
    
  </div>
    <div className="todo_style">
    <i className="fa fa-times-circle"
     aria-hidden="true" 
    onClick={() => {
        props.onSelect(props.id)
    }}></i>
    <li> {props.text} </li>
    </div>
    </>
    );
}

export default ToDoList;