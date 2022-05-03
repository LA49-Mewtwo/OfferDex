/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from "../constants/actionTypes";

export const displayOfferCreator = () => ({
  type: types.DISPLAY_OFFER,
});

export const displayInterviewCreator = () => ({
  type: types.DISPLAY_INTERVIEW,
});

export const addOfferCreator = (newOffer) => ({
  type: types.ADD_OFFER,
  payload: newOffer,
});

export const addInterviewCreator = (newInterview) => ({
  type: types.ADD_INTERVIEW,
  payload: newInterview,
});
