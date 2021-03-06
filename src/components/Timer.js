import React, { Component } from "react";
import "../styles/Timer.css";

class Timer extends Component {
  static defaultProps = {
    gcd: 2.5,
  };

  // Displays the time as s.ms, rounded to 2 decimals
  displayTime() {
    let time =
      this.props.time === 0
        ? 0
        : (Math.floor(this.props.time / 10) / 100).toString().padEnd(4, 0);

    return time;
  }

  render() {
    return (
      <div className="Timer">
        <h2 className="Timer-title">Time</h2>
        <div
          className={`Timer-value ${
            this.props.time > this.props.gcd * 1000 ? "over" : ""
          }`}
        >
          {`${this.displayTime()}s`}
        </div>
      </div>
    );
  }
}

export default Timer;
