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
  offerBoard: [1, 2, 3, 4],
  interviewBoard: [1, 2, 3, 4, 5, 6],
  currentlyOn: "",
};

const offerDexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_OFFER: {
      // const newState = JSON.parse(JSON.stringify(state));
      const newState = structuredClone(state);
      newState.currentlyOn = "offer";
      return newState;
    }
    case types.DISPLAY_INTERVIEW: {
      const newState = structuredClone(state);
      newState.currentlyOn = "interview";
      return newState;
    }
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
    default: {
      return state;
    }
  }
};

export default offerDexReducer;
