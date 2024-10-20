import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;

    newTask = newTask.trim();
    if (tasks.indexOf(newTask) !== -1) return;

    this.setState({
      tasks: [...tasks, newTask],
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    console.log(`edit ${e}, ${index}`);
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const allTasksAfterDelete = [...tasks];
    allTasksAfterDelete.splice(index, 1);

    this.setState({
      tasks: [...allTasksAfterDelete],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div id="main">
        <h1>To do List</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={newTask} />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span className="buttons">
                <FaEdit className="edit" onClick={(e) => this.handleEdit(e, index)} />
                <FaWindowClose className="delete" onClick={(e) => this.handleDelete(e, index)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
