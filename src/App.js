import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const initialTodos = [
  {
    id: "1559140530360",
    task: 'Use the input field and "+" button to add a todo',
    complete: false
  },
  {
    id: "1559140530362",
    task: "Click the button to the left to complete a todo",
    complete: false
  },
  {
    id: "1559140546041",
    task: "Click the button to the right to delete this todo",
    complete: true
  },
  {
    id: "1559140554289",
    task: 'Use the "Clear Completed" button to clear todos',
    complete: false
  }
];

const savedTodos = [];

class App extends React.Component {
  // Necessary state for the todo app
  constructor(props) {
    super(props);

    this.retrieveTodos();
    this.state = {
      todosList: savedTodos.length >= 1 ? savedTodos : initialTodos,
      todosTaskName: "",
      searchInput: '',
      searchTodos: [],
    };
  }

  // function helper to retrieveTodos from local storage
  retrieveTodos = () => {
    if (localStorage.length >= 1) {
      for (let i = 0; i < localStorage.length; i++) {
        let retrievedTodo = JSON.parse(window.localStorage.getItem(i));
        savedTodos.push(retrievedTodo);
      }
    }
  };

  // function helper to saveTodos to local storage
  saveTodos = () => {
    localStorage.clear();
    let count = 0;

    this.state.todosList.forEach(todo => {
      localStorage.setItem(count, JSON.stringify(todo));
      count++;
    });
  };

  onSearchHandler = input => {

    const newSearchList = this.state.todosList.filter(todo => {
      if(todo.task.includes(input.target.value)) {
        return todo;
      }
      return null;
    });

    this.setState({
      searchInput: input.target.value,
      searchTodos: newSearchList
    });

    if(input.target.value.length < 1) {
      this.setState({
        searchTodos: []
      })
    }


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
    const newTodosList = this.state.todosList.filter(todo => todo.id !== id); // return every other todo, except the todo which matches the ID
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
    this.saveTodos();

    const appStyle = {
      backgroundColor: "white",
      maxWidth: "600px",
      margin: "0 auto",
      borderRadius: "8px",
      paddingBottom: "8px",
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.20)'

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
          onSearchHandler={this.onSearchHandler}
          searchInput={this.state.searchInput}
          searchTodos = {this.state.searchTodos}
          todosList={this.state.todosList}
          removeTodo={this.removeTodo}
          isTodoComplete={this.isTodoComplete}
        />
        <p style={{fontSize: '10px', textAlign: 'center'}}>Background vector asset by the wonderful folk at <a style={{textDecoration: 'none', color: '#0076ff'}} href='https://www.freepik.com/free-vector/colorful-memphis-design-background-vector_3893585.htm'>freepik</a> </p>
      </div>
    );
  }
}

export default App;
