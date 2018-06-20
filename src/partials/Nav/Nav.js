import React    from "react";
import template from "./Nav.jsx";

class Nav extends React.Component {

	newDeviceButtonClick(event){
		this.props.navOpenModalCallback();
	}
	render() {
    	return template.call(this);
	}
}

export default Nav;
