import React, { Component } from 'react';

import { task } from '../task.json';

class Navigation extends Component{
  constructor(){
    super();
    this.state = {
      task
    }
  }

  render(){
    const task = this.state.task.map((task, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p>{task.responsable}</p>
            </div>
          </div>
        </div>
      )
    })


    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a  href="https://media.biobiochile.cl/wp-content/uploads/2018/12/dvhlkw3vsaekaxx-e1546292376926-750x400.jpg" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              { this.state.task.length }
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            {task}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
