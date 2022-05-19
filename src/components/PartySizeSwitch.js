import React, { Component } from "react";
import "../styles/PartySizeSwitch.css";

class PartySizeSwitch extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle();
  }

  render() {
    return (
      <div className="PartySizeSwitch">
        <button className="PartySizeSwitch-btn" onClick={this.handleClick}>
          {`${this.props.lightParty ? "Full Party" : "Light Party"}`}
        </button>
      </div>
    );
  }
}

export default PartySizeSwitch;
