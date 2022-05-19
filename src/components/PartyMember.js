import React, { Component } from "react";
import "../styles/PartyMember.css";

class PartyMember extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.check(this.props.id, this.props.role);
  }

  render() {
    console.log(this.props.guessing);
    let guessingClass = this.props.guessing ? "guessing" : "";

    return (
      <div className="PartyMember" onClick={this.handleClick}>
        <img
          className={`PartyMember-icon ${this.props.correctness} ${guessingClass}`}
          src={this.props.icon}
          alt={this.props.name}
        />
        <h3 className="PartyMember-abbr">{this.props.abbr}</h3>
      </div>
    );
  }
}

export default PartyMember;
