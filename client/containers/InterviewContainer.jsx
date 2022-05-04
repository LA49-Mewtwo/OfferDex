import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import AddInterview from "../components/AddInterview";

import Interview from "../components/Interview";

const mapStateToProps = (state) => ({
  popupAddInterview: state.offerDex.popupAddInterview,
  interviewBoard: state.offerDex.interviewBoard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addInterview: (interview) =>
      dispatch(actions.addInterviewCreator(interview)),
    AddInterviewSwitch: (show) =>
      dispatch(actions.addInterviewSwitchCreator(show)),
  };
};

class InterviewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="flex justify-center items-center ">
          <AddInterview
            popupAddInterview={this.props.popupAddInterview}
            addInterviewSwitch={this.props.AddInterviewSwitch}
          />
        </div>
        <>
          <Interview
            interviewDetails={this.props.interviewBoard}
            addInterviewSwitch={this.props.AddInterviewSwitch}
          />
        </>
      </>
    );
  }

  // render() {
  //   const interviews = [];
  //   let i = 0;
  //   for (let interview of this.props.interviewBoard) {
  //     i++;
  //     interviews.push(
  //       <Interview key={`interview${i}`} interviewDetails={interview} />
  //     );
  //   }
  //   return <>{interviews}</>;
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewContainer);
