import React from "react";

const Todo = props => {
  const classes = ["bg-teal-500", "my-1"];
  if (props.todo.filtered) {
    classes.push("hidden");
  }
  if (props.todo.completed) {
    classes.push("line-through", "bg-red-500");
  }

  return (
    <div
      className={
        classes.join(" ")
        // props.todo.completed
        //   ? "line-through bg-red-600 my-1"
        //   : "no-underline bg-teal-500 my-1"
      }
      onClick={() => props.handleToggleTodoCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
