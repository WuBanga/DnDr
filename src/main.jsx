import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import { App } from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename="/DnDr">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
