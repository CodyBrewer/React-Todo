import React from "react";

const Todo = props => {
  return (
    <div
      className={
        props.todo.completed
          ? "line-through bg-red-600 border-blue-300 border-2"
          : "no-underline bg-green-500 border-blue-300 border-2"
      }
      onClick={() => props.handleToggleTodoCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
