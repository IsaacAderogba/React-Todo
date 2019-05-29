import React from "react";
import Todo from "./Todo";
import "./Todo.css";


export default class TodoList extends React.Component {
  // render  TodoList component on to screen

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
