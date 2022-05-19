import React, { Component } from "react";
import "../styles/Timer.css";

class Timer extends Component {
  static defaultProps = {
    gcd: 2.5,
  };

  render() {
    return (
      <div className="Timer">
        <h2 className="Timer-title">Time</h2>
        <div
          className={`Timer-value ${
            this.props.time > this.props.gcd ? "over" : ""
          }`}
        >
          {this.props.time}
        </div>
      </div>
    );
  }
}

export default Timer;
