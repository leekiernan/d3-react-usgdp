import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(response => response.json())
  .then(data => {
    // ReactDOM.render(<Container data={data} />, document.getElementById('root'));
		ReactDOM.render(<App data={data} />, document.getElementById('root'));
		registerServiceWorker();

  });

