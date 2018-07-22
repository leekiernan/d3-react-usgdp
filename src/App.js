import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import D3 from './D3';
import Victory from './Victory';
import Recharts from './Recharts';
import ReactVis from './Reactvis';


class App extends Component {
  render() {
    return (
    	<div className="container">
    		<h2>{this.props.data.source_name}</h2>
    		<p>{this.props.data.description}</p>
    		<hr />

    		<div className="grid">
	    		<section className="d3"><D3 data={this.props.data.data} /></section>
	    		<section className="victory"><Victory data={this.props.data.data} /></section>
	    		<section className="recharts"><Recharts data={this.props.data.data} /></section>
	    		<section className="reactvis"><ReactVis data={this.props.data.data} /></section>
    		</div>
    	</div>
    );
  }
}

export default App;
