import React from 'react';

const initialTodos = [
  { id: '20041996', task: 'Pay the electric bill', complete: false },
  { id: '20041997', task: 'Pay the electric bill', complete: true },
  { id: '20041998', task: 'Pay the electric bill', complete: false },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props) {
    super(props);
    this.state = {
      todosList: initialTodos,
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
