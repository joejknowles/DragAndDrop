import React, { Component, PropTypes } from 'react';
import Knight from './Knight.jsx';
import Square from './Square.jsx';
import { canMoveKnight, moveKnight } from '../state/Game.jsx'


export default class ChessBoard extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (<div className="board">
      { squares }
    </div>);
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isBlack = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;

    const piece = (x === knightX && y === knightY) ?
      <Knight /> : null;

    return (
      <div key={i} className="square-wrapper"
        onClick={() => this.handleSquareClick(x, y)}>
        <Square isBlack={isBlack}>
          { piece }
        </Square>
      </div>
    );
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }
}
