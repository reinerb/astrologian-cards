import React, { Component } from "react";
import "../styles/PartyMember.css";

class PartyMember extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(`${this.props.name} clicked`);
  }

  render() {
    return (
      <div className="PartyMember">
        <img
          className="PartyMember-icon"
          src={this.props.icon}
          alt={this.props.name}
          onClick={this.handleClick}
        />
        <h3 className="PartyMember-abbr">{this.props.abbr}</h3>
      </div>
    );
  }
}

export default PartyMember;
