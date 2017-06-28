import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Index from './client';

render(<Index/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./client', () => {
    const NextApp = require('./client').default;
    render(
      React.createElement(NextApp),
      document.getElementById('root')
    );
  });
}
