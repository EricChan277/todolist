import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./styles";
import PropTypes from "prop-types";
import TodoList from "./TodoList";

class TodoListFooter extends Component {
    render() {
      return (
        <footer style={style.todoFooter}> 
          <span> 
          {this.props.todoCount} {(this.props.todoCount > 1) ? "todos" : "todo"} </span>
          <button style={style.clearBtn}>Clear completed</button>
        </footer>
      )
    }
  }

  TodoListFooter.propTypes = {
    todoCount:PropTypes.number.isRequired
  }

  export default TodoListFooter;