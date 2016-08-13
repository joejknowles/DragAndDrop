import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../state/constants/types.jsx'
import { DragSource } from 'react-dnd'

const knightSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }} className="knight">♘</div>
    );
  };
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
