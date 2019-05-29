import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const initialTodos = [
  { id: "20041996", task: "Pay the electric bill", complete: false },
  { id: "20041997", task: "Pay the electric bill", complete: true },
  { id: "20041998", task: "Pay the electric bill", complete: false }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todosList: initialTodos,
      todosTaskName: ""
    };
  }

  inputHandler = (input) => {
    this.setState({
      todosTaskName: input.target.value,
    })
  }

  addTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: this.state.todosTaskName,
      complete: false,
    };

    const newTodosList = this.state.todosList.concat(newTodo);

    this.setState({
      todosList: newTodosList,
      todosTaskName: '',
    });
  }

  isTodoComplete = (id) => {
    const newTodosList = this.state.todosList.map(todo => {
      if(todo.id === id) {
        todo.complete = todo.complete ? false : true;
      }
      return todo;
    });

    this.setState({
      todosList: newTodosList,
    });
  }

  removeTodo = (id) => {
    const newTodosList = this.state.todosList.filter(todo => todo.id !== id);
    this.setState({
      todosList: newTodosList,
    });
  }

  render() {
    return (
      <div>
        <TodoForm todosTaskName= {this.state.todosTaskName} inputHandler={this.inputHandler} addTodo={this.addTodo} />
        <TodoList todosList={this.state.todosList} removeTodo={this.removeTodo} isTodoComplete={this.isTodoComplete}/>
      </div>
    );
  }
}

export default App;

// export class ContainerClassy extends Component {
// constructor(props) {
// super(props);
// this.state = {
// count: 0,
// };
// }
// increment = () => this.setState({ count: this.state.count + 1 });
// decrement = () => this.setState({ count: this.state.count - 1 });
// render() {
// return (
// <Displayer
// type="class component"
// count={this.state.count}
// increment={this.increment}
// decrement={this.decrement}
// />
// );
// }
// }
// export function ContainerFunctional() {
// const [count, setCount] = useState(0);
// const increment = () => setCount(count + 1);
// const decrement = () => setCount(count - 1);
// return <Displayer type="functional" count={count} increment={increment} decrement={decrement} />;
// }
// function Displayer({ type, count, increment, decrement }) {
// return (
// <div>
// {type} count is {count}
// <button onClick={increment}>increment</button>
// <button onClick={decrement}>decrement</button>
// </div>
// );
// }
