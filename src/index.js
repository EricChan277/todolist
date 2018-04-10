import React, { Component } from "react";
import { defaultProps } from "prop-types";
import ReactDOM from "react-dom";

import style from "./inc/styles";
import TodoListHeader from "./inc/TodoListHeader";
import TodoListInput from "./inc/ToDoListInput";
import TodoList from "./inc/TodoList";
import TodoListFooter from "./inc/TodoListFooter";

const todos = ["Learn React!", "Learn Redux!", "Hello","asda"]

class TodoListApp extends Component{
    render() {
      return ( 
          <div style={style}>
            <TodoListHeader title="Prop of header"/>
            <TodoListInput/>
            <TodoList value={todos}/>
            <TodoListFooter todoCount={todos.length}/>
          </div>
        )
    }
  }
ReactDOM.render(<TodoListApp />, document.getElementById("root"));