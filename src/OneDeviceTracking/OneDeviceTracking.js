import React    from "react";
import "./OneDeviceTracking.css";
import Modal from 'react-modal';
import UserInputAnalysisConfigModal from './../UserInputAnalysisConfigModal/UserInputAnalysisConfigModal';



import {Line} from 'react-chartjs-2';


import 'chartjs-plugin-annotation';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};




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
			},
			userInputThreshold: null,
			userInputConfigModalIsOpen: false

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

	userInputButtonClicked(){
		this.openUserInputConfigModal();
		console.log(this.state.userInputThreshold);
	}
	algorithmButtonClicked(){
		this.algorithmButtonClicked();
	}	
	openUserInputConfigModal() {
    	this.setState({userInputConfigModalIsOpen: true});
	}
	closeUserInputConfigModal() {
		this.setState({userInputConfigModalIsOpen: false});
	}

	thresholdSubmitted(thresholdVal){
		this.setState({userInputThreshold: thresholdVal});
		// function to upload to database
	}


	
	render() {
    	return (
		    <div className="one-device-tracking">
		      	<h1 className="tracker-identification">{this.props.device_use} | Device ID: {this.props.device_id}</h1>
				<div className="contain-graph">
					<Line
						className="a-graph"
						data={this.state.data}
						width={'100px'}
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
				            plugins:{
					         	annotation: {
							        annotations: [
							          {
							            drawTime: "afterDatasetsDraw",
							            id: "hline",
							            type: "line",
							            mode: "horizontal",
							            scaleID: "y-axis-1",
							            value: 100,
							            borderColor: "black",
							            borderWidth: 5,
							            label: {
							              backgroundColor: "red",
							              content: "Test Label",
							              enabled: true
							            },
							            onClick: function(e) {
							              // The annotation is is bound to the `this` variable
							              console.log("Annotation", e.type, this);
							            }
							          }]
							     }
							}
					}}/>
				</div>
				<div className="line-break"></div>
				<div className="contain-options">
					<button onClick={() => {this.userInputButtonClicked()}} class="analysis-option user-input-analysis">
						<p>Manual Threshold Input</p>
					</button>
					<button onClick={() => {this.algorithmButtonClicked()}} class="analysis-option algorithm-analysis">
						<p>Apply Anomaly Detection Algorithm</p>
					</button>
					
				</div>

				<Modal
		          isOpen={this.state.userInputConfigModalIsOpen}
		          onRequestClose={this.closeUserInputConfigModal.bind(this)}
		          style={customStyles}
		          contentLabel="Example Modal"
		          overlayClassName="overlay">
		        	<UserInputAnalysisConfigModal thresholdSubmitted={this.thresholdSubmitted.bind(this)}/>
        		</Modal>
        	
			</div>

		);
	}
}

export default OneDeviceTracking;
