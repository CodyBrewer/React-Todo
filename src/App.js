import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoSearch from "./components/TodoSearch";

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
    const newTodo = {
      task: this.state.todo,
      completed: false,
      filtered: false,
      id: Date.now()
    };
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

  searchTodos = search => e => {
    e.preventDefault();
    console.log(search);
    this.setState(prevState => {
      let todos = prevState.todos;
      todos
        .filter(el => !el.task.includes(search))
        .forEach(el => (el.filtered = true));
      console.log(todos);
      return { todos: todos };
    });
  };

  clearSearchFilter = e => {
    e.preventDefault();
    this.setState(prevState => {
      const updatedTodos = prevState.todos;
      updatedTodos.forEach(el => (el.filtered = false));
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <div className="flex w-full my-2">
          <TodoSearch
            searchTodos={this.searchTodos}
            clearSearchFilter={this.clearSearchFilter}
          />
          <TodoForm
            value={this.state.todo}
            handleChangeTodo={this.handleChangeTodo}
            handleAddTodo={this.handleAddTodo}
            handleClearCompletedTodos={this.handleClearCompletedTodos}
          />
        </div>
        <TodoList
          handleToggleTodoCompleted={this.handleToggleTodoCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
