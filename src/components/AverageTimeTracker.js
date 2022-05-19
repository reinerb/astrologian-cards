import React, { Component } from "react";
import "../styles/AverageTimeTracker.css";

class AverageTimeTracker extends Component {
  static defaultProps = {
    gcd: 2.5,
  };

  constructor(props) {
    super(props);

    this.displayTime = this.displayTime.bind(this);
  }

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
      <div className="AverageTimeTracker">
        <h2 className="AverageTimeTracker-title">Average Time</h2>
        <div
          className={`AverageTimeTracker-value ${
            this.props.time > this.props.gcd * 1000 ? "over" : ""
          }`}
        >
          {`${this.displayTime()}s`}
        </div>
      </div>
    );
  }
}

export default AverageTimeTracker;
