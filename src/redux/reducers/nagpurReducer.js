/* eslint-disable prettier/prettier */

import {
    GET_NAGPUR,
    GET_NAGPUR_SUCCESS,
    GET_NAGPUR_ERROR,
  } from '../actions/getNagpurAction';

  const initialState = {
    nagpurData: [],
    nagpurLoading: false,
    error: false,
  };

  function nagpurReducer(state = initialState, action) {
    switch (action.type) {
      case GET_NAGPUR:
        return {...state, nagpurLoading: true};
      case GET_NAGPUR_SUCCESS:
        return {...state, nagpurData: action.payload, nagpurLoading: false};
              case GET_NAGPUR_ERROR:
  return {...state, nagpurLoading: true, error: true};
      default:
        return state;
    }
  }

  export default nagpurReducer;
