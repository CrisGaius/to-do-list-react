import React, { Component } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Read',
      'Train',
      'Study',
    ],
  };

  inputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div id="main">
        <h1>To do List</h1>

        <form className="form">
          <input type="text" onChange={this.inputChange} value={newTask} />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div className="buttons">
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
