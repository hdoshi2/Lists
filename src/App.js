import React, { Component } from "react";
import "./App.css";
import TodoItem from "./ToDoItem";
import toDo from "./data";

// function App() {
//   return (
//     <div className="App">
//        <TodoItem />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoArray: toDo
    };
  }
  render() {
    return (
      <div className="App">
        <TodoItem toDoList={this.state.toDoArray} />
      </div>
    );
  }
}

export default App;
