import React, { Component } from "react";

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
    this.state = { name: "Hardik" };
  }

  render() {
    // console.log(this.props.toDoList)
    const { toDoList } = this.props;
    return (
      <div className="todo-list">
        {toDoList.map(({ id, completed, text }) => {
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
