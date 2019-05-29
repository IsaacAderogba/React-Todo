import React from "react";

export default class Todo extends React.Component {
  // render the todos on to the screen
  render() {
    // styles
    const style = {
      color: this.props.todo.complete ? "black" : "white"
    };

    return (
      <li>
        <button
          style={style}
          onClick={() => this.props.isTodoComplete(this.props.todo.id)}
        >
          ✓
        </button>
        <p>{this.props.todo.task}</p>
        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
          X
        </button>
        <span>{this.props.todo.id}</span>
      </li>
    );
  }
}

// {this.props.todo.complete}
