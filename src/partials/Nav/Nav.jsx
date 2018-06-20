import "./Nav.css";
import React from "react";

function template() {
  return (
    <div className="nav">
        <h1 className="nav-heading">Guardian Monitor</h1>
    	<div className="contain-plus">
    		<p>Have a new device?</p>
    		<button>
    			<img onClick={this.newDeviceButtonClick.bind(this)} src={require("./../plus.png")} className="plus-btn"/>
    		</button>
    	</div>
    </div>
  );
};

export default template;
