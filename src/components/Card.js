import "../App.css"

import React from "react";
import ReactCardFlip from 'react-card-flip';
import CardFront from "./CardFront"
import CardBack from "./CardBack"

class Card extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div className="card-side card-front"
          onClick={this.handleClick}
          style={{backgroundColor: "#"+this.props.color}}>
          <CardFront name={this.props.name} textfront={this.props.textfront} />
          <p className="hint">Click or Tap to flip</p>
        </div>

        <div className="card-side card-back"
          onClick={this.handleClick}
          style={{backgroundColor: "#"+((this.props.color)+222222)}}>
          <CardBack name={this.props.name} textback={this.props.textback} />
          <p className="hint">Click or Tap to flip</p>
        </div>
      </ReactCardFlip>
      )
    };
};

export default Card;
