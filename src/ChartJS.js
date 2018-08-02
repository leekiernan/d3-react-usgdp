import React from "react";
import { Scatter } from "react-chartjs-2";
import moment from 'moment'

class ChartJS extends React.Component {
	constructor(props) {
		super(props);

		const currency = price => price.replace(/[^0-9.-]+/g, "");
		let data = this.props.data.map(el => {
			return { x: moment(el["date"]), y: +currency(el["price"]) };
		});

		console.log('data', data);
		this.state = {
			data: data
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState, snapshot) {}

	render() {
		const data = {
		  labels: ['Scatter'],
		  datasets: [
		    {
		      label: 'data',
		      fill: false,
		      backgroundColor: 'rgba(75,192,192,0.4)',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      pointBackgroundColor: '#fff',
		      pointBorderWidth: 1,
		      pointHoverRadius: 5,
		      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		      pointHoverBorderColor: 'rgba(220,220,220,1)',
		      pointHoverBorderWidth: 2,
		      pointRadius: 1,
		      pointHitRadius: 10,
		      data: this.state.data
		    }
		  ]
		};
		return (
			<div>
				<h2>ChartJS</h2>
				<Scatter width={600} height={400} data={data} options={{ showLines: true, scales: { xAxes: [{ time: { unit:'month' } }] } }} />
			</div>
		);
	}
}

export default ChartJS;
