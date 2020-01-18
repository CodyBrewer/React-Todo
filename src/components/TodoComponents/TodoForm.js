import React from "react";

const TodoForm = props => {
  return (
    <form className="flex flex-col w-1/2">
      <input
        className="text-black"
        onChange={props.handleChangeTodo}
        type="text"
        name="todo"
        id="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button
        className="disabled bg-teal-500"
        disabled={props.value.length > 0 ? false : true}
        onClick={props.handleAddTodo}
      >
        Add Todo
      </button>
      <button
        className="bg-green-300"
        onClick={props.handleClearCompletedTodos}
      >
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
