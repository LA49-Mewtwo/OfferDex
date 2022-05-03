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
  default: 123,
};

const offerDexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAMPLE_ACTION: {
      const state = JSON.parse(JSON.stringify(state));
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default offerDexReducer;
