import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './component/App';

// Smart contracts
import { } from '../../contract/MyToken.sol';

render(
  <App />,
  document.getElementById('root')
);
