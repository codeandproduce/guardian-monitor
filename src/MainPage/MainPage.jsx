import "./MainPage.css";
import React from "react";

import OneDeviceTracking from './../OneDeviceTracking/OneDeviceTracking';
import UserBriefProfile from './../UserBriefProfile/UserBriefProfile';

function template() {
  return (
    <div className="main-page">
    	<UserBriefProfile />
    	<OneDeviceTracking device_use={"Heart Rate"} device_id={12}/>
    	<OneDeviceTracking device_use={"Oximeter"} device_id={14}/>
    </div>
  );
};

export default template;
