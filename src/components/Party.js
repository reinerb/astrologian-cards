import React, { Component } from "react";
import PartyMember from "./PartyMember";
import { v4 as uuid } from "uuid";
import "../styles/Party.css";

class Party extends Component {
  render() {
    const party = this.props.members.map((e) => (
      <PartyMember key={uuid()} name={e.name} icon={e.icon} abbr={e.abbr} />
    ));
    return <div className="Party">{party}</div>;
  }
}

export default Party;
