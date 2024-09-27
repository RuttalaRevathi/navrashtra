/* eslint-disable prettier/prettier */

import {
    GET_RELIGION,
    GET_RELIGION_SUCCESS,
    GET_RELIGION_ERROR,
  } from '../actions/getReligionAction';

  const initialState = {
    religionData: [],
    religionLoading: false,
    error: false,
  };

  function religionReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RELIGION:
        return {...state, religionLoading: true};
      case GET_RELIGION_SUCCESS:
        return {...state, religionData: action.payload, religionLoading: false};
              case GET_RELIGION_ERROR:
  return {...state, religionLoading: true, error: true};
      default:
        return state;
    }
  }

  export default religionReducer;
