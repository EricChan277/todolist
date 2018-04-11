import React from "react";
import style from "./styles";
import PropTypes from "prop-types";

const TodoListFooter = ({todoCount, clearCompleted}) => {
      let text = "";

      switch (todoCount){
        case 0 : {
          text = "No tasks."
          break;
        }
        case 1 : {
          text = "thing to do";
          break;
        }
        default: {
          text = "I ain't got anything to do";
        }
      }

      return (
        <footer style={style.todoFooter}> 
          <span> 
          {/* {this.props.todoCount} {(this.props.todoCount > 1) ? "todos" : "todo" */} 
          {todoCount} {todoCount > 1 ? "things to do" : text}
          </span>
          <button style={style.clearBtn}
          onClick={clearCompleted}>Clear completed</button>
        </footer>
      )
    }

  TodoListFooter.propTypes = {
    todoCount:PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired
  }

  export default TodoListFooter;