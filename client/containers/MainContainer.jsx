import React from "react";
import { connect } from "react-redux";
import "../input.css";
import Navbar from "../components/Navbar";

const mapStateToProps = (state) => {
  // add state here
  return {};
};

function MainContainer() {
  return <Navbar />;
}

export default connect(mapStateToProps, null)(MainContainer);
