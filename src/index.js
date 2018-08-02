import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = require('./MOCK_DATA.json');

ReactDOM.render(<App data={data.sort( (a,b) => new Date(b.date) - new Date(a.date) ).reverse()} />, document.getElementById('root'));
registerServiceWorker();
