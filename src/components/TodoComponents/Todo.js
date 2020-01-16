import React from "react";

const Todo = props => {
  return (
    <div
      className={
        props.todo.completed
          ? "line-through bg-red-600 my-1"
          : "no-underline bg-teal-500 my-1"
      }
      onClick={() => props.handleToggleTodoCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
