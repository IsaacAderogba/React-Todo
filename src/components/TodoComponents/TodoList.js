import React from "react";
import Todo from "./Todo";
import "./Todo.css";


export default class TodoList extends React.Component {
  // render  TodoList component on to screen

  render() {
    const todoListStyle = {
        margin: "24px 18px 0 18px",
      };

    const ulStyle = {
        margin: "0",
        paddingLeft: '0',
    }

    return (
      <div style={todoListStyle}>
        <h2>Your Todos</h2>
        <ul style={ulStyle}>
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
      </div>
    );
  }
}
