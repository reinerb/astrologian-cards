import React, { Component } from "react";
import Card from "./Card";
import Party from "./Party";
import ScoreTracker from "./ScoreTracker";
import { choose, cards, jobs } from "../functions/helpers";
import "../styles/Game.css";

class Game extends Component {
  static defaultProps = {
    partySize: 4,
    cards: cards,
    jobs: jobs,
  };

  constructor(props) {
    super(props);

    this.state = {
      card: choose(this.props.cards),
    };
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

  render() {
    let party =
      this.props.partySize === 4
        ? this.createParty(1, 1, 2)
        : this.createParty(2, 2, 4); // Can also technically be 1, 2, 5 - for later
    return (
      <div className="Game">
        <div className="Game-play-area">
          <Card name={this.state.card.name} src={this.state.card.icon} />
          <Party members={party} />
        </div>
        <div className="Game-score-area">
          <ScoreTracker />
        </div>
      </div>
    );
  }
}

export default Game;
