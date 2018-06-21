import "./OneDeviceTracking.css";
import React from "react";

import {Line} from 'react-chartjs-2';




function template() {
	return (
	    <div className="one-device-tracking">
	      	<h1 className="tracker-identification">{this.props.device_use} | Device ID: {this.props.device_id}</h1>
			<Line
				className="a-graph"
				data={this.state.data}
				width={'80%'}
				height={'300px'}
				options={{
					maintainAspectRatio: false,
					lineTension: 0,
					scales: {
		                yAxes : [{
		                    ticks : {
		                        max : 120,    
		                        min : 80
		                    }
		                }]
		            },
			}}/>
			<div className="tracker-options">
				<button></button>
				<button></button>
			</div>

		</div>

	);
};

export default template;
