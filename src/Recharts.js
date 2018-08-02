import React from "react";
import {
	CartesianGrid,
	Line,
	LineChart,
	Tooltip,
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

    const currency = (price) => price.replace(/[^0-9.-]+/g, '');
		let data = this.props.data.map(el => {
			return { x: el['date'], y: +currency(el['price']) };
		});

		this.state = {
			data: data
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState, snapshot) {}

	render() {
		const RTT = ({label, payload}) => (<div style={{ background:'white', padding:'20px' }}>{label} / £{payload.value}</div>);

		return (
			<div>
				<h2>Rechart</h2>
				<LineChart width={600} height={400} data={this.state.data} margin={{ top: 40, right: 40, bottom: 20, left: 20 }}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="x" label="Date" offset={10} tickFormatter={formatXAxis} />
					<YAxis dataKey="y" label="Price" domain={["auto", "auto"]} />

					<Tooltip content={RTT} />
					<Line dataKey="y" stroke="#ff7300" dot={false} />
				</LineChart>
			</div>
		);
	}
}

export default Rechart;
