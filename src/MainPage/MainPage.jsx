import "./MainPage.css";
import React from "react";

import OneDeviceTracking from './../OneDeviceTracking/OneDeviceTracking';
import UserBriefProfile from './../UserBriefProfile/UserBriefProfile';

function template() {
  	return (
	    <div className="main-page">
	    	<UserBriefProfile />
	    	{ this.loadEachTracker() }
	    </div>
  	);
};

export default template;
