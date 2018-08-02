import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import D3 from './D3';
import Victory from './Victory';
import Recharts from './Recharts';
import ReactVis from './Reactvis';
import ChartJS from './ChartJS';


class App extends Component {
  render() {
    return (
    	<div className="container">
    		<div className="grid">
	    		<section className="d3"><D3 data={this.props.data} /></section>
	    		<section className="victory"><Victory data={this.props.data} /></section>
	    		<section className="recharts"><Recharts data={this.props.data} /></section>
	    		<section className="reactvis"><ReactVis data={this.props.data} /></section>
	    		<section className="chartjs"><ChartJS data={this.props.data} /></section>
    		</div>
    	</div>
    );
  }
}

export default App;
