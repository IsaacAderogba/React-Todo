// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <h2>Today</h2>
        <ul>
          {this.props.todosList.map(todo => {
            return (
              <Todo
                removeTodo={this.props.removeTodo}
                isTodoComplete={this.props.isTodoComplete}
                key={todo.id}
                todo={todo}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
