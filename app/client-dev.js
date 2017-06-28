import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Index from './client-index';

render(<Index/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./client-index', () => {
    const NextApp = require('./client-index').default;
    render(
      React.createElement(NextApp),
      document.getElementById('root')
    );
  });
}
// if (module.hot) {
//     module.hot.accept('./client-index', () => { render(React.createElement(Index)) })
//   }
