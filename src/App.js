import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: this.grabLocalStorageTodos(),
      todo: ""
    };
  }

  grabLocalStorageTodos = () => {
    const localStorageTodos = localStorage.getItem("todos");
    if (localStorageTodos) {
      return JSON.parse(localStorageTodos);
    }
    return [];
  };

  handleAddTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState(prevState => {
      const newTodos = [...prevState.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: [...prevState.todos, newTodo], todo: "" };
    });
  };

  handleChangeTodo = e => this.setState({ [e.target.name]: e.target.value });

  handleToggleTodoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleClearCompletedTodos = e => {
    e.preventDefault();
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(el => !el.completed);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <TodoList
          handleToggleTodoCompleted={this.handleToggleTodoCompleted}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleChangeTodo={this.handleChangeTodo}
          handleAddTodo={this.handleAddTodo}
          handleClearCompletedTodos={this.handleClearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
