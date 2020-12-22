import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CheckBox from './CheckBox';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<CheckBox />, document.getElementById('container'));