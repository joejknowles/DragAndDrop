import React, { Component, PropTypes } from 'react';
import Knight from './Knight.jsx';
import BoardSquare from './BoardSquare.jsx';
import { canMoveKnight, moveKnight } from '../state/Game.jsx';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

class ChessBoard extends Component {
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
    return (
      <div key={i} className="square-wrapper"
        onClick={() => this.handleSquareClick(x, y)}>
        <BoardSquare x={x} y={y}>
          { this.renderPiece(x, y) }
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    return (x === knightX && y === knightY) ?
          <Knight /> : null;
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }
}
export default DragDropContext(HTML5Backend)(ChessBoard);
