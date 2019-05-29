import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.todo.complete}</span>
        <p>{this.props.todo.task}</p>
        <button>X</button>
        <span>{this.props.todo.id}</span>
      </li>
    );
  }
}
