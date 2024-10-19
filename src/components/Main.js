import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     newTask: '',
  //   };

  //   this.inputChange = this.inputChange.bind(this);
  // }

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
      <div className="main">
        <h1>{newTask}</h1>
        <h1>Lista de Tarefas</h1>

        <form>
          <input type="text" onChange={this.inputChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
