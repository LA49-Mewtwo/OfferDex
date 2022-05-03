import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import "../dist/output.css";
/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
