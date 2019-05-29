import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";


const initialTodos = [
  { id: "20041996", task: "Pay the electric bill", complete: false },
  { id: "20041997", task: "Pay the electric bill", complete: true },
  { id: "20041998", task: "Pay the electric bill", complete: false }
];

class App extends React.Component {
  // Necessary state for the todo app
  constructor(props) {
    super(props);
    this.state = {
      todosList: initialTodos,
      todosTaskName: ""
    };
  }

  // function to display input that the user enters on screen
  inputHandler = input => {
    this.setState({
      todosTaskName: input.target.value
    });
  };

  // function to add a new todo if user presses button to add new todo
  addTodo = () => {
    if (this.state.todosTaskName) {
      const newTodo = {
        id: Date.now(),
        task: this.state.todosTaskName,
        complete: false
      };

      const newTodosList = this.state.todosList.concat(newTodo);

      this.setState({
        todosList: newTodosList,
        todosTaskName: ""
      });
    }
  };

  // function to remove todo if user presses the x button beside the todo
  removeTodo = id => {
    const newTodosList = this.state.todosList.filter(todo => todo.id !== id);
    this.setState({
      todosList: newTodosList
    });
  };

  // function that checks whether the completion status of the todo should be true or false
  isTodoComplete = id => {
    const newTodosList = this.state.todosList.map(todo => {
      if (todo.id === id) {
        todo.complete = todo.complete ? false : true;
      }
      return todo;
    });

    this.setState({
      todosList: newTodosList
    });
  };

  // function to clear all todos that have a completion status of true
  clearCompleteTodos = () => {
    const newTodoList = this.state.todosList.filter(todo => !todo.complete);

    this.setState({
      todosList: newTodoList
    });
  };

  // render the application on to the webpage, passing relevant props
  render() {

    const appStyle = {
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid red"
    };

    return (
      <div style={appStyle}>
        <TodoForm
          todosTaskName={this.state.todosTaskName}
          clearCompleteTodos={this.clearCompleteTodos}
          inputHandler={this.inputHandler}
          addTodo={this.addTodo}
        />
        <TodoList
          todosList={this.state.todosList}
          removeTodo={this.removeTodo}
          isTodoComplete={this.isTodoComplete}
        />
      </div>
    );
  }
}

export default App;
