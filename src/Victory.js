import React from 'react';
// import {VictoryChart, VictoryLine} from 'Victory';
import { VictoryLine, VictoryChart } from "victory";
// import { VictoryContainer, VictoryTheme, Curve, Point } from "victory-core";


class Victory extends React.Component {
  constructor(props){
    super(props);

    let data = this.props.data.map( el => {
  		return { x: new Date(el[0]), y: el[1] }
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

    		<VictoryChart polar={false}  height={300} scale={{ x: 'time' }}>
          <VictoryLine interpolation='linear' data={this.state.data} style={{ data: { stroke: "#c43a31" } }} />
        </VictoryChart>
    	</div>
    );
  }
}

export default Victory;
