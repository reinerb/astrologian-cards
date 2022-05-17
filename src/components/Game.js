import React, { Component } from "react";
import Card from "./Card";
import Party from "./Party";
import ScoreTracker from "./ScoreTracker";
import { choose, cards, jobs } from "../functions/helpers";

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

  render() {
    return (
      <div>
        <Card />
        <Party size={this.props.partySize} />
        <ScoreTracker />
      </div>
    );
  }
}

export default Game;
