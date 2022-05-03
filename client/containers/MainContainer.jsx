import React, { Component } from "react";
import { connect } from "react-redux";
import "../input.css";
import Navbar from "../components/Navbar";
import * as actions from "../actions/actions";

import Interview from "../components/Interview";
import Offer from "../components/Offer";

const mapStateToProps = (state) => ({
  // add state here
  offerBoard: state.offerDex.offerBoard,
  interviewBoard: state.offerDex.interviewBoard,
  currentlyOn: state.offerDex.currentlyOn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    displayOffer: () => dispatch(actions.displayOfferCreator()),
    displayInterview: () => dispatch(actions.displayInterviewCreator()),
    addOffer: (offer) => dispatch(actions.addOfferCreator(offer)),
    addInterview: (interview) =>
      dispatch(actions.addInterviewCreator(interview)),
  };
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentlyOn == "offer")
      return (
        <>
          <Navbar
            displayInterview={this.props.displayInterview}
            displayOffer={this.props.displayOffer}
          />
          <Offer />
        </>
      );
    return (
      <>
        <Navbar
          displayInterview={this.props.displayInterview}
          displayOffer={this.props.displayOffer}
        />
        <Interview />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
