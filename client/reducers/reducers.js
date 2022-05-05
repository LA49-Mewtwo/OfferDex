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
  popupAddInterview: false,
};

const offerDexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_OFFER: {
      // const newState = JSON.parse(JSON.stringify(state));
      console.log("payload:::", action.payload);
      const offerBoard = [...action.payload];
      const currentlyOn = "offer";
      const newState = {
        ...state,
        offerBoard,
        currentlyOn,
      };
      console.log("newState: ", newState);
      return newState;
    }
    case types.DISPLAY_INTERVIEW: {
      console.log("payload:::", action.payload);
      const interviewBoard = [...action.payload];
      const currentlyOn = "interview";
      const newState = {
        ...state,
        interviewBoard,
        currentlyOn,
      };
      console.log("newState: ", newState);
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
      const newState = JSON.parse(JSON.stringify(state));
      newState.interviewBoard.push(action.payload);
      return newState;
    }
    case types.ADD_OFFER_SWITCH: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.popupAddOffer = action.payload;
      return newState;
    }
    case types.ADD_INTERVIEW_SWITCH: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.popupAddInterview = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default offerDexReducer;
