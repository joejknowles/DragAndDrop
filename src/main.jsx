import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Components/ChessBoard.jsx'
import { observe } from './state/Game.jsx'

const rootEl = document.getElementById('main');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);
