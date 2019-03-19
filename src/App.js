import React, { Component } from 'react';
import './asset/css/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        day : "",
        dayName: "",
        month : ""
    }
  }

  componentDidMount() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.setState({
      day: days[date.getDay()],
      dayName: date.getDay(),
      month: months[date.getMonth()]
    });

    console.log(date.getDay());

  }

  render() {
    return (

      <div className="todo">
        <div className="todo-container">
          <h2 className="todo-datetime">
            <strong>{this.state.day},</strong> {this.state.dayName} {this.state.month}
          </h2>
          {/* <p className="todo-sumtask"><strong>6</strong></p>
          <p className="todo-smalltext">Created Task</p> */}

          {/* <input className=""></input> */}
        </div>
      </div>

    );
  }

}

export default App;
