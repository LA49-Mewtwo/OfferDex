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
    return (
      <>
        <div className="flex justify-center items-center ">
          <AddOffer
            popupAddOffer={this.props.popupAddOffer}
            addOfferSwitch={this.props.AddOfferSwitch}
          />
        </div>
        <>
          <Offer
            offerDetails={this.props.offerBoard}
            addOfferSwitch={this.props.AddOfferSwitch}
          />
        </>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer);
