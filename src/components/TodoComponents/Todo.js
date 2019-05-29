import React from 'react';

export default class Todo extends React.Component {
    render() {
        
        console.log(this.props.todo);
        return (
        <li>
            <span>{this.props.todo.complete}</span>
            <p>{this.props.todo.task}</p>
            <span>{this.props.todo.id}</span>
        </li>);
    }
}