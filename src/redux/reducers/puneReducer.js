/* eslint-disable prettier/prettier */

import {
    GET_PUNE,
    GET_PUNE_SUCCESS,
    GET_PUNE_ERROR,
  } from '../actions/getPuneAction';

  const initialState = {
    puneData: [],
    puneLoading: false,
    error: false,
  };

  function puneReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PUNE:
        return {...state, puneLoading: true};
      case GET_PUNE_SUCCESS:
        return {...state, puneData: action.payload, puneLoading: false};
              case GET_PUNE_ERROR:
  return {...state, puneLoading: true, error: true};
      default:
        return state;
    }
  }

  export default puneReducer;
