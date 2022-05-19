import React, { Component } from "react";
import "../styles/StartButton.css";

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.start();
  }

  render() {
    return (
      <div className="StartButton">
        <button className="StartButton-btn" onClick={this.handleClick}>
          Start
        </button>
      </div>
    );
  }
}

export default StartButton;
