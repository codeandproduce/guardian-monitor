import React    from "react";
import template from "./MainPage.jsx";

class MainPage extends React.Component {
  render() {
    return template.call(this);
  }
}

export default MainPage;
