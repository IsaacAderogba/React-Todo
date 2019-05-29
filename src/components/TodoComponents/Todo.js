import React from "react";

export default class Todo extends React.Component {
  // render the todos on to the screen
  render() {
      // convert date to String
    let date = this.props.todo.id;
    let dateString = Date(date.toString());
    let truncDate = dateString.substr(0, 10) 

    // styles
    const todoStyle = {
      listStyleType: "none",
      margin: "30px 0",
      paddingLeft: "16px",
      borderRadius: "4px",
      border: "1px solid #A0A0A0",
      display: "flex",
      alignItems: "center"
    };

    const isCompleteStyle = {
      color: this.props.todo.complete ? "white" : "transparent",
      background: this.props.todo.complete ? "#0076FF" : 'white',
      borderRadius: "100px",
      boxShadaow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      borderColor: "#0076FF",
      fontWeight: "bold",
      width: "24px",
      height: "24px",
      marginRight: "16px"
    };

    const cancelTodoItem = {
      borderRadius: "100px",
      background: "#24292E",
      color: "white",
      boxShadaow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      fontWeight: "bold",
      border: "none",
      width: "24px",
      height: "24px",
      marginRight: "16px"
    };

    const taskContentStyle = {
      marginRight: "16px"
    };

    const dateStyle = {
        color: 'lightgrey',
        textAlign: 'right',
        flex: '1',
        marginRight: '16px'
    }

    return (
      <li style={todoStyle}>
        <button
          style={isCompleteStyle}
          onClick={() => this.props.isTodoComplete(this.props.todo.id)}
        >
          ✓
        </button>
        <p style={taskContentStyle}>{this.props.todo.task}</p>
        <button
          style={cancelTodoItem}
          onClick={() => this.props.removeTodo(this.props.todo.id)}
        >
          X
        </button>
        <span style={dateStyle}>{truncDate}</span>
      </li>
    );
  }
}

// {this.props.todo.complete}
