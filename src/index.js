import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';

render(<App />, document.getElementById('root'));
registerServiceWorker();
