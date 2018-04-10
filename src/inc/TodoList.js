import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./styles";
import TodoItem from "./TodoItem"

class TodoList extends Component {
    render() {
      return  (
        <ul style={style.todolist}>
          {this.props.value.map((item, i)=>{
            return <TodoItem key={i} item={item}/>
          })}        
        </ul>
      )
    }
  }

export default TodoList;