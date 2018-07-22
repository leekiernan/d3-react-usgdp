import React from 'react';
import * as d3 from 'd3';

const width = 600;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 40 };
const red = '#8b0000';

class D3 extends React.Component {
  constructor(props){
    super(props);

	  this.xScale = d3.scaleTime().range([ margin.left, (width - margin.right) ]);
	  this.yScale = d3.scaleLinear().range([(height-margin.bottom), margin.top]);
	  this.xAxis = d3.axisBottom().scale(this.xScale).tickFormat(d3.timeFormat('%Y'));
	  this.yAxis = d3.axisLeft().scale(this.yScale).tickFormat( n => `$${n}b` );

    this.state = { line: '' };
  }

  componentDidMount() {
    const { data } = this.props;
    if (!data) { return; }

    const timeDomain = d3.extent(data, d => new Date(d[0]));
    const gdp = d3.max(data, d => d[1]);

    this.xScale.domain(timeDomain);
    this.yScale.domain([0,gdp]);

    let line = d3.line()
    	.x(d => this.xScale(new Date(d[0])))
    	.y(d => this.yScale(d[1]));

    this.setState({line: line(data)});
  }


	componentDidUpdate(prevProps, prevState, snapshot) {
		d3.select(this.refs.xAxis).call(this.xAxis);
		d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    return (
    	<div>
    		<h2>D3</h2>
	      <svg width={width} height={height}>
	      	<path d={this.state.line} fill='none' stroke={red} />
	      	<g>
		      	<g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`}></g>
		      	<g ref="yAxis" transform={`translate(${margin.left}, 0)`}></g>
	      	</g>
	      </svg>
    	</div>
    );
  }
}

export default D3;
