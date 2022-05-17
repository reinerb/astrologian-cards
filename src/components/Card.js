import React, { Component } from "react";
import "../styles/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img className="Card-icon" src={this.props.src} alt={this.props.name} />
        <h2 className="Card-name">{this.props.name}</h2>
      </div>
    );
  }
}

export default Card;
