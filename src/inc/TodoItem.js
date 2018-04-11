import React, { Component } from "react";
import style from "./styles";
import PropTypes from "prop-types";

class TodoItem extends Component {
    render() {
      const {item, toggleComplete, trashItem} = this.props;
      return (
            <li style={style.todoitem}>
              <span>{this.props.item.todo}</span>
              <div style={style.btnContainer}>    
                <input type="checkbox" id={item.id} 
                checked={item.complete} 
                onClick={() => toggleComplete(item)}
                />
                <button onClick={() => trashItem(item)}>
                  {/* <i className="fa fa-trash"/> */}
                  trash
                </button>
              </div>
            </li>
      );
    }
  }

  TodoItem.propTypes = {
    trashItem:PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  }
export default TodoItem;