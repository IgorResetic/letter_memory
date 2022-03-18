import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import MemoryGame from './components/memory_game/MemoryGame';
import App from './App';
import Home from './components/home/Home'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)