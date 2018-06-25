import React    from "react";
import './UserInputAnalysisConfigModal.css';

class UserInputAnalysisConfigModal extends React.Component {

	submitThresholdValueClicked(event){
		event.preventDefault();
		this.props.thresholdSubmitted(this.refs.submittedThresholdValue.value);
	}
	render() {
	    return (
		    <div className="modal-box">
		      <h1 className="modal-box-heading">Alert when it reaches this threshold:</h1>
		      <form className="set-threshold-value">
		      	<label for="threshold-value">Threshold value:</label>
		      	<input 
		      		ref="submittedThresholdValue"
		      		name="threshold-value" 
		      		type="number"/>
		      	<button onClick={(e) => this.submitThresholdValueClicked(e)} className="submit-threshold-value-btn">Submit</button>
		      </form>
		    </div>
	  	);
	  }
}

export default UserInputAnalysisConfigModal;
