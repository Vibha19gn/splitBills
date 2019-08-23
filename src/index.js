import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Root/>
  </BrowserRouter>,
  document.getElementById('root')
);
