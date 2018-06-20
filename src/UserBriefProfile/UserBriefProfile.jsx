import "./UserBriefProfile.css";
import React from "react";

function template() {
  return (
    <div className="contain-user-brief-profile">
    	<div className="user-brief-profile">
    		<div className="contain-user-photo">
    			<img src={require('./user.png')}/>
    		</div>
    	    <div className="user-des">
    	    	<h1 className="user-name">Chan Woo Kim</h1>
    	    	<p className="user-description">Age: 17</p>
    	    	<p className="user-description">ID: #382</p>
    	    </div>
    	</div>
    	<div className="devices-connected">
    		<h1 className="devices-connected-heading">Devices:</h1>
    		<a href="#" className="link-to-device">Heart Rate #12</a>
    		<a href="#" className="link-to-device">Oximeter #14</a>
    	</div>
    </div>

  );
};

export default template;
