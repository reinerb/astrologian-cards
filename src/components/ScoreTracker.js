import React, { Component } from "react";
import "../styles/ScoreTracker.css";

class ScoreTracker extends Component {
  render() {
    return (
      <div className="ScoreTracker">
        <h2 className="ScoreTracker-title">Score</h2>
        <div className="ScoreTracker-scoreboard">
          {`${this.props.score} / ${this.props.round}`}
        </div>
      </div>
    );
  }
}

export default ScoreTracker;
