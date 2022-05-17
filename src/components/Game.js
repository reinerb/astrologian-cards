import React, { Component } from "react";
import Card from "./Card";
import PartyMember from "./PartyMember";
import ScoreTracker from "./ScoreTracker";
import PartySizeSwitch from "./PartySizeSwitch";
import { choose, cards, jobs } from "../functions/helpers";
import { v4 as uuid } from "uuid";
import "../styles/Game.css";

class Game extends Component {
  static defaultProps = {
    cards: cards,
    jobs: jobs,
  };

  constructor(props) {
    super(props);

    this.state = {
      card: choose(this.props.cards),
      lightParty: true,
      party: this.createParty(1, 1, 2),
    };

    this.togglePartySize = this.togglePartySize.bind(this);
  }

  // Select the given number of tanks, healers, and DPS from props
  createParty(nTanks, nHealers, nDPS) {
    let party = [];

    for (let i = 0; i < nTanks; i++) {
      party.push(choose(this.props.jobs.tanks));
    }

    party.push(this.props.jobs.healers[2]);
    if (nHealers > 1) {
      for (let i = 1; i < nHealers; i++) {
        party.push(choose(this.props.jobs.healers));
      }
    }

    for (let i = 0; i < nDPS; i++) {
      party.push(choose(this.props.jobs.dps));
    }

    return party;
  }

  togglePartySize() {
    if (this.state.lightParty) {
      this.setState({
        card: choose(this.props.cards),
        lightParty: false,
        party: this.createParty(2, 2, 4),
      });
    } else {
      this.setState({
        card: choose(this.props.cards),
        lightParty: true,
        party: this.createParty(1, 1, 2),
      });
    }
  }

  render() {
    const party = this.state.party.map((e) => (
      <PartyMember key={uuid()} name={e.name} icon={e.icon} abbr={e.abbr} />
    ));

    return (
      <div className="Game">
        <div className="Game-play-area">
          <Card name={this.state.card.name} src={this.state.card.icon} />
          <div className="Game-party">{party}</div>
        </div>
        <div className="Game-score-area">
          <ScoreTracker />
          <PartySizeSwitch
            lightParty={this.state.lightParty}
            toggle={this.togglePartySize}
          />
        </div>
      </div>
    );
  }
}

export default Game;
