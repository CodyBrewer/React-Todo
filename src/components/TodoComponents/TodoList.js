import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="mb-4">
      {props.todos.map(todo => (
        <Todo
          handleToggleTodoCompleted={props.handleToggleTodoCompleted}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
