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

export const displayOfferCreator = (offers) => ({
  type: types.DISPLAY_OFFER,
  payload: offers,
});

export const displayInterviewCreator = (interviews) => ({
  type: types.DISPLAY_INTERVIEW,
  payload: interviews,
});

export const getOfferCreator = () => ({
  type: types.GET_OFFER,
});

export const getInterviewCreator = () => ({
  type: types.GET_INTERVIEW,
});

export const addOfferCreator = (newOffer) => ({
  type: types.ADD_OFFER,
  payload: newOffer,
});

export const addInterviewCreator = (newInterview) => ({
  type: types.ADD_INTERVIEW,
  payload: newInterview,
});

export const addOfferSwitchCreator = (show) => ({
  type: types.ADD_OFFER_SWITCH,
  payload: show,
});

export const addInterviewSwitchCreator = (show) => ({
  type: types.ADD_INTERVIEW_SWITCH,
  payload: show,
});
