import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import * as actions from "../actions/actions";

import InterviewContainer from "./InterviewContainer";
import OfferContainer from "./OfferContainer";
import Offer from "../components/Offer";
import Interview from "../components/Interview";
import AddOffer from "../components/AddOffer";

const mapStateToProps = (state) => ({
  // add state here
  offerBoard: state.offerDex.offerBoard,
  interviewBoard: state.offerDex.interviewBoard,
  currentlyOn: state.offerDex.currentlyOn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    displayOffer: (offers) => dispatch(actions.displayOfferCreator(offers)),
    displayInterview: (interviews) => dispatch(actions.displayInterviewCreator(interviews)),
    getOffer: () => dispatch(actions.getOfferCreator()),
    getInterview: () => dispatch(actions.getInterviewCreator()),
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
    // this.props.getOffer();
    // this.props.getInterview();
    if (this.props.currentlyOn == "offer")
      return (
        <>
          <Navbar
            displayInterview={this.props.displayInterview}
            displayOffer={this.props.displayOffer}
            currentlyOn={this.props.currentlyOn}
          />
          <OfferContainer />
        </>
      );
    else if (this.props.currentlyOn == "interview") {
      return (
        <>
          <Navbar
            displayInterview={this.props.displayInterview}
            displayOffer={this.props.displayOffer}
            currentlyOn={this.props.currentlyOn}
          />
          <InterviewContainer />
        </>
      );
    } else
      return (
        <>
          <Navbar
            displayInterview={this.props.displayInterview}
            displayOffer={this.props.displayOffer}
            currentlyOn={this.props.currentlyOn}
          />
        </>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
