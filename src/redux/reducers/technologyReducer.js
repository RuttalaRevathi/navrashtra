/* eslint-disable prettier/prettier */

import {
    GET_TELANGANA,
    GET_TELANGANA_SUCCESS,
    GET_TELANGANA_ERROR,
  } from '../actions/getTechnologyAction';

  const initialState = {
    technologyData: [],
    technologyLoading: false,
    error: false,
  };

  function technologyReducer(state = initialState, action) {
    switch (action.type) {
      case GET_TELANGANA:
        return {...state, telanganaLoading: true};
      case GET_TELANGANA_SUCCESS:
        return {...state, technologyData: action.payload, telanganaLoading: false};
              case GET_TELANGANA_ERROR:
  return {...state, telanganaLoading: true, error: true};
      default:
        return state;
    }
  }

  export default technologyReducer;
