import React from "react";

export default class TodoForm extends React.Component {
  // render  TodoForm component on to screen
  render() {
    return (
      <>
        <h1>Todos App</h1>
        <button onClick={this.props.clearCompleteTodos}>Clear Completed</button>
        <div>
          <input
            value={this.props.todosTaskName}
            onChange={this.props.inputHandler}
            type="text"
          />
          <button onClick={this.props.addTodo}> + </button>
        </div>
      </>
    );
  }
}
