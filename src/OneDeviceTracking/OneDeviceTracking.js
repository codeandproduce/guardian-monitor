import React    from "react";
import template from "./OneDeviceTracking.jsx";



class OneDeviceTracking extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			data: {
				labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
				datasets: [{
						label: "BPM",
						backgroundColor: "rgba(0,0,0,0.001)",
						borderColor: "#f75b5b",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [ 104.13989536,  107.91949841,   96.4633243 ,  106.43326279,
        103.85472401,  108.71263477,   95.46671204,  106.69580715,
        103.02523622,   90.8530618 ,  107.64703879,   94.55876797,
         95.78446085,   92.09334804,  100.52565625,   90.94306739,
        103.22652561,   95.18602974,   96.15358922,  105.10598599]
					}]
			}
		};

	}
	componentDidMount() {
	  this.interval = setInterval(() => {
	  	var data1 = this.state.data.datasets[0].data.slice(0);
	  	data1.shift();
	  	data1.push(Math.random()*20 + 100);
	  	this.setState({data: {
				labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
				datasets: [{
						label: "BPM",
						backgroundColor: "rgba(0,0,0,0.001)",
						borderColor: "#f75b5b",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: data1
				}]
			}
		});
	  }, 200);
	}
	componentWillUnmount() {
	  clearInterval(this.interval);
	}
	
	render() {
    	return template.call(this);
	}
}

export default OneDeviceTracking;
