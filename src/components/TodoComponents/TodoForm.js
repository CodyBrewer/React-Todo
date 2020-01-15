import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChangeTodo}
        type="text"
        name="todo"
        id="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearCompletedTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
