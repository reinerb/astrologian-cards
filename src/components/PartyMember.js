import React, { Component } from "react";

class PartyMember extends Component {
  render() {
    return (
      <div className="PartyMember">
        <img
          className="PartyMember-icon"
          src={this.props.icon}
          alt={this.props.name}
        />
        <h3 className="Partymember-abbr">{this.props.abbr}</h3>
      </div>
    );
  }
}

export default PartyMember;
