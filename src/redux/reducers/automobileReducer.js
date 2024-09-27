/* eslint-disable prettier/prettier */

import {
    GET_AUTOMOBILE,
    GET_AUTOMOBILE_SUCCESS,
    GET_AUTOMOBILE_ERROR,
  } from '../actions/getAutomobileAction';

  const initialState = {
    automobileData: [],
    automobileLoading: false,
    error: false,
  };

  function automobileReducer(state = initialState, action) {
    switch (action.type) {
      case GET_AUTOMOBILE:
        return {...state, automobileLoading: true};
      case GET_AUTOMOBILE_SUCCESS:
        return {...state, automobileData: action.payload, automobileLoading: false};
              case GET_AUTOMOBILE_ERROR:
  return {...state, automobileLoading: true, error: true};
      default:
        return state;
    }
  }

  export default automobileReducer;
