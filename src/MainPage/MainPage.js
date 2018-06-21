import React    from "react";
import template from "./MainPage.jsx";

import OneDeviceTracking from './../OneDeviceTracking/OneDeviceTracking';

class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			allTrackers: [{
				device_id: 12,
				deviceName: "Heart Rate",
				dataValues: [ 104.13989536,  107.91949841,   96.4633243 ,  106.43326279,
        103.85472401,  108.71263477,   95.46671204,  106.69580715,
        103.02523622,   90.8530618 ,  107.64703879,   94.55876797,
         95.78446085,   92.09334804,  100.52565625,   90.94306739,
        103.22652561,   95.18602974,   96.15358922,  105.10598599]
			},		{
				deviceId: 12,
				deviceName: "Heart Rate",
				dataValues: [ 104.13989536,  107.91949841,   96.4633243 ,  106.43326279,
        103.85472401,  108.71263477,   95.46671204,  106.69580715,
        103.02523622,   90.8530618 ,  107.64703879,   94.55876797,
         95.78446085,   92.09334804,  100.52565625,   90.94306739,
        103.22652561,   95.18602974,   96.15358922,  105.10598599]
			}]
		};
	}

	loadEachTracker() {
		var thisList = this.state.allTrackers;
		return thisList.map((obj) => 
			<OneDeviceTracking device_use={obj.deviceName} device_id={obj.device_id} dataValues={obj.dataValues}/>
		);
	}	
	componentDidMount() {
	  this.interval = setInterval(() => {
	  	var allTrackersCopy = this.state.allTrackers.slice(0);

	  	for(var x = 0; x<allTrackersCopy.length; x++){
	  		var data1 = allTrackersCopy[x].dataValues;
	  		data1.unshift(Math.random()*20 + 100);
	  		data1.pop();
	  	}
	  	
	  	this.setState({
	  		allTrackers: allTrackersCopy
	  	});
	  }, 1000);
	}
	componentWillUnmount() {
	  clearInterval(this.interval);
	}



  	render() {
    	return template.call(this);
  	}
}

export default MainPage;
