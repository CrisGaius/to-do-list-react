import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  inputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

    return (
      <div id="main">
        <h1>Lista de Tarefas</h1>

        <form className="form">
          <input type="text" onChange={this.inputChange} value={newTask} />
          <button type="submit"><FaPlus /></button>
        </form>
      </div>
    );
  }
}
