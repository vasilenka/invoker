import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';

import App from './App';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
