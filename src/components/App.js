import React, { Component } from "react";
import "./App.css";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    inputValue: "",
    tasks: []
  };

  handleText = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addTask = () => {
    const tasks = [...this.state.tasks];
    tasks.push(this.state.inputValue);
    if (this.state.inputValue !== "") {
      this.setState({
        tasks,
        inputValue: ""
      });
    }
  };

  removeTask = () => {
    const tasks = [...this.state.tasks];
    tasks.splice(this.state.tasks.length - 1, 1);
    this.setState({
      tasks,
      inputValue: ""
    });
  };

  clearTasks = () => {
    this.setState({
      tasks: [],
      inputValue: ""
    });
  };

  render() {
    return (
      <>
        <h1 className="title">ToDo App</h1>
        <div>
          <textarea
            placeholder="dodaj zadanie"
            value={this.state.inputValue}
            onChange={this.handleText}
          />
          <div>
            <button onClick={this.addTask}>Add</button>
            <button onClick={this.removeTask}>Remove</button>
            <button onClick={this.clearTasks}>Clear</button>
          </div>
        </div>
        <TaskList props={this.state} />
      </>
    );
  }
}
export default App;
