import React from "react";
import "./Todo.css";

export default class TodoSearch extends React.Component {
  render() {
    const inputStyle = {
      width: "60%",
      minWidth: '220px',
      height: "40px",
      borderRadius: "18px",
      border: "1px solid #A0A0A0",
      padding: "0 16px",
      fontSize: "16px"
    };

    return (
      <input value={this.props.searchInput}
      onChange={this.props.onSearchHandler}
      style={inputStyle} placeholder="Search your todos" type="text" />
    );
  }
}
