import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.name} />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Card;
