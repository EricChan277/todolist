import React, { Component } from "react";
import style from "./styles";

class TodoListInput extends Component {
    render () {
      return (
        <form style={style.newitem}>
          <input type="text"></input>
          <p style={style.greytext}> (press enter to add) </p>
        </form>
      )
    }
  }
export default TodoListInput;