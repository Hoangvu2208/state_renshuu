import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
    this.handleChange = (e) => {
      e.preventDefault();
      this.setState({
        item: e.target.value,
      });
    };
    this.handleAddItem = () => {
      this.setState({
        list: [...this.state.list, this.state.item],
      });
    };
  }

  render() {
    // {console.log(this.state)}
    let { list } = this.state;
    return (
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="">
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input
            type="button"
            onClick={() => this.handleAddItem()}
            value={"Add"}
          />
        </form>

        {list.map((item, index) => (
          <ul>
            <li key={index}>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
}
