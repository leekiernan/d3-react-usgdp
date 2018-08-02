import React from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries
} from "react-vis";

class ReactVis extends React.Component {
	constructor(props) {
		super(props);

    const currency = (price) => price.replace(/[^0-9.-]+/g, '');
		let data = this.props.data.map(el => {
			return { x: new Date(el['date']).getTime(), y: +currency(el['price']) };
		});

		this.state = {
			data: data
		};
	}

	componentDidMount() {}
	componentDidUpdate(prevProps, prevState, snapshot) {}

	render() {
		return (
			<div>
				<h2>React Vis</h2>

				<XYPlot xType="time" width={600} height={400}>
					<HorizontalGridLines />
					<LineSeries data={this.state.data} />
					<XAxis />
					<YAxis />
				</XYPlot>
			</div>
		);
	}
}

export default ReactVis;
