import React, { Component } from "react";
import { defaultProps } from "prop-types";
import ReactDOM from "react-dom";
import style from "./styles";

class TodoItem extends Component {
    render() {
      return (
            <li style={style.todoitem}>
              <span>{this.props.item}</span>
              <div style={style.btnContainer}>    
                <input type="checkbox"></input>
                <button>Trash</button>
              </div>
            </li>
      );
    }
  }

export default TodoItem;