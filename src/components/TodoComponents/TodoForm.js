import React from "react";
import "./Todo.css";

export default class TodoForm extends React.Component {
  // render  TodoForm component on to screen
  render() {
    const todoFormStyle = {
      margin: "18px",
    };

    const headerStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center"
    };

    const headingButtonStyle = {
      backgroundColor: "#24292E",
      color: "white",
      fontSize: "16px",
      padding: "8px 20px",
      borderRadius: "4px",
      boxShadaow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      border: "none",
      cursor: 'pointer',
      outline:'none',
    };

    const headingStyle = {
      fontWeight: "bold",
      marginBottom: '18px'
    };

    const addTodoStyle = {
      margin: "18px 0",
      display: "flex",
      justifyContent: "space-between"
    };

    const inputStyle = {
      width: "75%",
      borderRadius: "16px",
      border: "1px solid #A0A0A0",
      padding: "0 16px",
      fontSize: "16px"
    };

    const inputButtonStyle = {
      background: "#0076FF",
      borderRadius: "100px",
      boxShadaow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      border: "none",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      width: "40px",
      height: "40px",
      cursor: 'pointer',
      outline:'none',
    };

    return (
      <div style={todoFormStyle}>
        <div style={headerStyle}>
          <h1 style={headingStyle}>TodoList</h1>
          <button
            style={headingButtonStyle}
            onClick={this.props.clearCompleteTodos}
          >
            Clear Completed
          </button>
        </div>
        <div style={addTodoStyle}>
          <input
            style={inputStyle}
            value={this.props.todosTaskName}
            onChange={this.props.inputHandler}
            placeholder="Click to quickly add a new task"
            type="text"
          />
          <button style={inputButtonStyle} onClick={this.props.addTodo}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  }
}
