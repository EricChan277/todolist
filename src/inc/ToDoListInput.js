import React, { Component } from 'react';
import style from "./styles";
import PropTypes from "prop-types";

class TodoListInput extends Component {
  render() {
    return (
      <div>
     
        <form style={style.newitem} onSubmit={(event) => this.props.addTodo(event)}>
          <input type="text" onChange={(event)=> this.props.handleInput(event)}/>
          <span style={style.greytext}> (enter to add) </span>
        </form>
        
      </div>
    );
  }
}

TodoListInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
} 
export default TodoListInput;

