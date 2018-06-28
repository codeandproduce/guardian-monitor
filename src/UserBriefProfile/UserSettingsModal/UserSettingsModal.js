import React    from "react";
import "./UserSettingsModal.css";

class UserSettingsModal extends React.Component {
  render() {
    return (
	    <div className="modal-box">
	      <h1 className="modal-box-heading">Connect a New Device</h1>
	      <form className="authenticate-new-device">
	      	<label for="device-name">Device Name</label>
	      	<input name="device-name" type="text"/>
	      </form>
	    </div>
	  );
  }
}

export default UserSettingsModal;
