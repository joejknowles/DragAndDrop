import React, { Component, PropTypes } from 'react';
import Square from './Square';
import { canMoveKnight, moveKnight } from '../state/Game';
import { ItemTypes } from '../state/constants/types';
import { DropTarget } from 'react-dnd';

class BoardSquare extends Component {
  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const isBlack = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className="board-square">
        <Square isBlack={ isBlack }>
          { this.props.children }
        </Square>
        { isOver && canDrop &&
          <div className="board-square__highlight"/>
        }
      </div>
    );
  }
}

const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y)
  },

  drop(props, monitor) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
