import React    from "react";
import template from "./OneDeviceTracking.jsx";



class OneDeviceTracking extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			deviceName: this.props.device_use,
			deviceId: this.props.device_id,
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
						data: this.props.dataValues
					}]
			}
		};

	}
	componentWillReceiveProps(someProp) {
  		if(this.props.dataValues !== someProp.dataValues){
  			var data11 = this.state.data.splice(0);
  			data11.datasets.data = someProp.dataValues;
  			console.log(data11);
  			this.setState({data: data11});
  		}
	}
	
	render() {
    	return template.call(this);
	}
}

export default OneDeviceTracking;
