import React, { Component } from "react";
import toDo from "./data";

// const ToDoItem = () => {
//   console.log(toDo);
//   return (
//     <div className="todo-list">
//       {toDo.map(({ id, completed, text }) => {
//         return (
//           <div key={id} className="todo-item">
//             <input type="checkbox" checked={completed} />
//             {text}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log()
    return (
      <div className="todo-list">
        {toDo.map(({ id, completed, text }) => {
          return (
            <div key={id} className="todo-item">
              <input type="checkbox" checked={completed} />
              {text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ToDoItem;
