import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

import Interview from "../components/Interview";

const mapStateToProps = (state) => ({
  interviewBoard: state.offerDex.interviewBoard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addInterview: (interview) =>
      dispatch(actions.addInterviewCreator(interview)),
  };
};

class InterviewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const interviews = [];
    let i = 0;
    for (let interview of this.props.interviewBoard) {
      i++;
      interviews.push(
        <Interview key={`interview${i}`} interviewDetails={interview} />
      );
    }
    return <>{interviews}</>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewContainer);
