import React, { Component } from "react";
import Card from "./Card";
import PartyMember from "./PartyMember";
import ScoreTracker from "./ScoreTracker";
import PartySizeSwitch from "./PartySizeSwitch";
import Timer from "./Timer";
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
      round: 0,
      score: 0,
      guessing: false,
      timeToGuess: 0,
      timing: false,
    };

    this.togglePartySize = this.togglePartySize.bind(this);
    this.isRoleCorrect = this.isRoleCorrect.bind(this);
    this.update = this.update.bind(this);
    this.generate = this.generate.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  // Select the given number of tanks, healers, and DPS from props
  createParty(nTanks, nHealers, nDPS) {
    let party = [];

    for (let i = 0; i < nTanks; i++) {
      party.push({
        ...choose(this.props.jobs.tanks),
        id: uuid(),
        correctnessClass: "",
      });
    }

    party.push({ ...this.props.jobs.healers[2], id: uuid() }); // There must always be an AST
    if (nHealers > 1) {
      for (let i = 1; i < nHealers; i++) {
        party.push({
          ...choose(this.props.jobs.healers),
          id: uuid(),
          correctnessClass: "",
        });
      }
    }

    for (let i = 0; i < nDPS; i++) {
      party.push({
        ...choose(this.props.jobs.dps),
        id: uuid(),
        correctnessClass: "",
      });
    }

    return party;
  }

  // Generates a new card and party
  generate() {
    if (this.state.lightParty) {
      this.setState({
        card: choose(this.props.cards),
        party: this.createParty(1, 1, 2),
        guessing: false,
        timeToGuess: 0,
      });
    } else {
      this.setState({
        card: choose(this.props.cards),
        party: this.createParty(2, 2, 4),
        guessing: false,
        timeToGuess: 0,
      });
    }

    this.startTimer();
  }

  // Toggles between 4- and 8-man parties
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

  // Start and stop the timer
  startTimer() {
    if (!this.state.timing) {
      this.setState({ timing: true });
      this.guessTime = setInterval(() => this.tick(), 10);
    }
  }

  stopTimer() {
    this.setState({ timing: false });
    clearInterval(this.guessTime);
  }

  // Ticks the time up
  tick() {
    this.setState({ timeToGuess: this.state.timeToGuess + 10 });
  }

  // Checks if the given role is correct for the given card
  // Prioritizes DPS over support roles
  isRoleCorrect(role) {
    return (
      role === this.state.card.dps || // DPS is correct, or
      (role === this.state.card.support && // Support is correct and there is no correct DPS
        !this.state.party.some((e) => e.role === this.state.card.dps))
    );
  }

  // Handles updating the game state when an icon is clicked
  update(id, role) {
    this.stopTimer();

    let correctnessArr = [...this.state.party];
    let scoreUpdate = this.state.score;
    let roundUpdate = this.state.round + 1;

    for (let i = 0; i < correctnessArr.length; i++) {
      if (correctnessArr[i].id === id && this.isRoleCorrect(role)) {
        correctnessArr[i].correctnessClass = "correct";
        scoreUpdate += 1;
      } else if (correctnessArr[i].id === id) {
        correctnessArr[i].correctnessClass = "incorrect";
      } else if (this.isRoleCorrect(correctnessArr[i].role)) {
        correctnessArr[i].correctnessClass = "also-correct";
      }
    }

    this.setState({
      party: correctnessArr,
      score: scoreUpdate,
      round: roundUpdate,
      guessing: true,
      timing: false,
    });

    setTimeout(this.generate, 1500);
  }

  render() {
    const party = this.state.party.map((e) => (
      <PartyMember
        key={e.id}
        id={e.id}
        name={e.name}
        icon={e.icon}
        abbr={e.abbr}
        role={e.role}
        correctness={e.correctnessClass}
        guessing={this.state.guessing}
        check={this.update}
      />
    ));

    return (
      <div className="Game">
        <div className="Game-play-area">
          <h1 className="Game-title">AST Card Quiz</h1>
          <div className="Game-status">
            <Card name={this.state.card.name} src={this.state.card.icon} />
            <div className="Game-party">{party}</div>
          </div>
          <Timer time={this.state.timeToGuess} />
        </div>
        <div className="Game-score-area">
          <div className="Game-description">
            <p>Play the card on the correct class.</p>
            <p>
              Prioritize DPS over tanks and healers. Other correct answers will
              be highlighted in blue.
            </p>
            <p>
              Press the button below to toggle between a 4-player and 8-player
              party.
            </p>
          </div>
          <ScoreTracker score={this.state.score} round={this.state.round} />
          <PartySizeSwitch
            lightParty={this.state.lightParty}
            toggle={this.togglePartySize}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.guessTime);
  }
}

export default Game;
