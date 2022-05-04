import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

import Offer from "../components/Offer";

const mapStateToProps = (state) => ({
  offerBoard: state.offerDex.offerBoard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addOffer: (offer) => dispatch(actions.addOfferCreator(offer)),
  };
};

class OfferContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const offers = [];
    let i = 0;
    for (let offer of this.props.offerBoard) {
      i++;
      offers.push(<Offer key={`interview${i}`} offerDetails={offer} />);
    }
    return <>{offers}</>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer);
