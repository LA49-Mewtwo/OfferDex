/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer
 *
 * ************************************
 */
import * as types from "../constants/actionTypes";

const initialState = {
  username: "",
  offerBoard: [1],
  interviewBoard: [1, 2, 3, 4, 5, 6],
  currentlyOn: "",
  popupAddOffer: false,
};

const offerDexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_OFFER: {
      const newState = structuredClone(state);
      const port = 3000;
      const url = `http://localhost:${port}/getOffers`;
      let fetchStatus;
      fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        fetchStatus = response.status;
        newState.offerBoard = response.json();
      });
      newState.currentlyOn = "offer";
      return newState;
    }
    case types.DISPLAY_INTERVIEW: {
      const newState = structuredClone(state);
      const port = 3000;
      const url = `http://localhost:${port}/getInterviews`;
      let fetchStatus;
      fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        fetchStatus = response.status;
        newState.interviewBoard = response.json();
      });
      newState.currentlyOn = "interview";
      return newState;
    }
    // case types.GET_OFFER: {
    //   const newState = structuredClone(state);

    //   return newState;
    // }
    // case types.GET_INTERVIEW: {
    //   const newState = structuredClone(state);

    //   return newState;
    // }
    case types.ADD_OFFER: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.offerBoard.push(action.payload);
      return newState;
    }
    case types.ADD_INTERVIEW: {
      const newState = structuredClone(state);
      newState.interviewBoard.push(action.payload);
      return newState;
    }
    case types.ADD_OFFER_SWITCH: {
      const newState = structuredClone(state);
      newState.popupAddOffer = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default offerDexReducer;
