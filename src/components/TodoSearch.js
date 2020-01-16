import React, { Component } from "react";

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  onSearch = e => {
    if (this.state.search.length) {
      this.props.clearSearchFilter(e);
      this.props.searchTodos(this.state.search)(e);
    } else {
      e.preventDefault();
    }
  };

  onClear = e => {
    this.props.clearSearchFilter(e);
    this.setState({ search: "" });
  };

  render() {
    return (
      <form className="flex flex-col w-1/2" onSubmit={this.onSearch}>
        <input
          className="text-black"
          type="search"
          name="search"
          id="search"
          value={this.state.search}
          placeholder="Search..."
          onChange={this.handleInputChange}
        />
        <button type="submit" className="bg-teal-300">
          Search
        </button>
        <button type="button" className="bg-green-800" onClick={this.onClear}>
          Clear Search
        </button>
      </form>
    );
  }
}

export default TodoSearch;
