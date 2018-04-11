import React, { Component } from "react";
import style from "./styles";
import PropTypes from "prop-types";

class TodoListHeader extends Component {
    render() {
      return  <header style={style.header}>{this.props.title}</header>
    }
  }


TodoListHeader.defaultProps = {
    title: "So much to do!"
}

TodoListHeader.propTypes = {
  title:PropTypes.string.isRequired
}

export default TodoListHeader;