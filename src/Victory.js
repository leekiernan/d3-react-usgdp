import React from 'react';
// import {VictoryChart, VictoryLine} from 'Victory';
import { VictoryLine, VictoryChart } from "victory";
// import { VictoryContainer, VictoryTheme, Curve, Point } from "victory-core";


class Victory extends React.Component {
  constructor(props){
    super(props);

    const currency = (price) => price.replace(/[^0-9.-]+/g, '');
    let data = this.props.data.map( el => {
  		return { x: new Date(`${el['date']} ${el['time']}`), y: +currency(el['price']) }
  	});

    this.state = {
    	data: data
    }
  }

  componentDidMount() {
  }


	componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    return (
    	<div>
    		<h2>Victory</h2>
    		<div style={{ width: '600px', height: '400px' }}>
	    		<VictoryChart polar={false} scale={{ x: 'time' }}>
	          <VictoryLine interpolation='linear' data={this.state.data} style={{ data: { stroke: "#c43a31" } }} />
	        </VictoryChart>
    		</div>
    	</div>
    );
  }
}

export default Victory;
