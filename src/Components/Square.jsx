import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  static propTypes = {
    isBlack: PropTypes.bool
  }

  render() {
    const { isBlack } = this.props;
    const htmlClass = 'square ' + (isBlack ? 'black-square' : 'white-square');

    return(
      <div className={ htmlClass }>
        { this.props.children }
      </div>
    );
  }
}
