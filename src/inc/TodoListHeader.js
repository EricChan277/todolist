import React, { Component } from "react";
import { defaultProps } from "prop-types";
import ReactDOM from "react-dom";
import style from "./styles";

class TodoListHeader extends Component {
    render() {
      return  <header style={style.header}>{this.props.title}</header>
    }
  }


TodoListHeader.defaultProps = {
    title: "So much to do!"
}

export default TodoListHeader;