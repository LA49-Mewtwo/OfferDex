import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import AddOffer from "../components/AddOffer";

import Offer from "../components/Offer";

const mapStateToProps = (state) => ({
  popupAddOffer: state.offerDex.popupAddOffer,
  offerBoard: state.offerDex.offerBoard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addOffer: (offer) => dispatch(actions.addOfferCreator(offer)),
    AddOfferSwitch: (show) => dispatch(actions.addOfferSwitchCreator(show)),
  };
};

class OfferContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const offerTable = (
      <Offer
        offerDetails={this.props.offerBoard}
        addOfferSwitch={this.props.AddOfferSwitch}
      />
    );
    if (!this.props.popupAddOffer) return <>{offerTable}</>;
    else
      return (
        <>
          <AddOffer addOfferSwitch={this.props.AddOfferSwitch} />
          {offerTable}
        </>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer);
