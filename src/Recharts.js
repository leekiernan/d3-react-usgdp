import React from "react";
import {
	CartesianGrid,
	Line,
	LineChart,
	Tooltip,
	Label,
	XAxis,
	YAxis,
	// Area,
	// Brush,
	// AreaChart
} from "recharts";


const formatXAxis = (tickItem) => { return tickItem.substr(0,4); }


class Rechart extends React.Component {
	constructor(props) {
		super(props);

		let data = this.props.data.map(el => {
			return { x: el[0], y: el[1] };
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
				<h2>Rechart</h2>
				<LineChart width={600} height={400} data={this.state.data} margin={{ top: 40, right: 40, bottom: 20, left: 20 }}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="x" label="Date" offset={10} tickFormatter={formatXAxis} />
					<YAxis domain={["auto", "auto"]} label="">
						<Label value="b" position="insideTopLeft" offset={10} />
					</YAxis>

					<Tooltip />
					<Line dataKey="y" stroke="#ff7300" dot={false} />
				</LineChart>
			</div>
		);
	}
}

export default Rechart;
