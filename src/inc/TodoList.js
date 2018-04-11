import React from "react";
import style from "./styles";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const TodoList = props => (
        <ul style={style.todolist}>
          {props.todos.map((item)=>{
            return <TodoItem key={item.id} item={item}
             toggleComplete = {props.toggleComplete}
             trashItem={props.trashItem}/>
          })}        
        </ul>
)

TodoList.propTypes = {
  todos:PropTypes.array.isRequired,
  toggleComplete:PropTypes.func.isRequired,
  trashItem:PropTypes.func.isRequired
}

export default TodoList;