import React    from "react";
import Modal from 'react-modal';
import UserSettingsConfigModal from './UserSettingsModal/UserSettingsModal'
import "./UserBriefProfile.css";

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





class UserBriefProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userName: 'Chan Woo Kim',
			age: 17, 
			userID: 382,
			userSettingsModalIsOpen: false,
			contacts:[
				'+15129547131',
				'+15129547131',
				'+15129547131'
			]
		}
	}
	renderLinksToDevice(){
		return this.props.devices_creds.map((obj) => 
			<a href={obj.deviceId} className="link-to-device">{obj.deviceName} #{obj.deviceId}</a>
		);
	}

	openUserSettingsModal() {
    	this.setState({userSettingsModalIsOpen: true});
	}
	closerUserSettingsModal() {
		this.setState({userSettingsModalIsOpen: false});
	}

	settingsConfigButtonClicked(){
		this.openUserSettingsModal();

	}
  	render() {
	    return (
		    <div className="contain-user-brief-profile">
		    	<div className="user-brief-profile">
		    		<div className="contain-user-photo">
		    			<img src={require('./user.png')}/>
		    		</div>
		    	    <div className="user-des">
		    	    	<h1 className="user-name">{this.state.userName}</h1>
		    	    	<p className="user-description">Age: {this.state.age}</p>
		    	    	<p className="user-description">ID: #{this.state.userID}</p>
		                <button onClick={() => this.settingsConfigButtonClicked()} className="user-settings-button">Change user settings</button>
		    	    </div>
		    	</div>
		    	<div className="devices-connected">
		    		<h1 className="devices-connected-heading">Devices:</h1>
		    		{this.renderLinksToDevice()}
		    	</div>
		    	<Modal
		        	isOpen={this.state.userSettingsModalIsOpen}
		        	onRequestClose={this.closerUserSettingsModal.bind(this)}
		        	style={customStyles}
		        	contentLabel="Example Modal"
		        	overlayClassName="overlay">
		        	<div className="modal-box">
				    	<h1 className="modal-box-heading">Connect phone number (include area code)</h1>
				      	<form className="set-phone-number">
					      	<label for="primary-phone">Primary contact:</label>
					      	<input 
					      		ref="submittedPrimaryPhone"
					      		name="primary-phone" 
					      		type="text"/>
					      	
					      	<label for="second-phone">Secondary contact:</label>
					      	<input 
					      		ref="submittedSecondaryPhone"
					      		name="secondary-phone" 
					      		type="text"/>
					      	
					      	<label for="third-phone">Third contact:</label>
					      	<input 
					      		ref="submittedThirdPhone"
					      		name="third-phone" 
					      		type="text"/>

					      	<button onClick={(e) => this.submitThresholdValueClicked(e)} className="submit-threshold-value-btn">Submit</button>
				      </form>
				  	</div>
        		</Modal>

		    </div>
	    );
  }
}

export default UserBriefProfile;
