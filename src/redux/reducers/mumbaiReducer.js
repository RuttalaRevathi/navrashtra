/* eslint-disable prettier/prettier */

import {
    GET_MUMBAI,
    GET_MUMBAI_SUCCESS,
    GET_MUMBAI_ERROR,
  } from '../actions/getMumbaiAction';

  const initialState = {
    mumbaiData: [],
    mumbaiLoading: false,
    error: false,
  };

  function mumbaiReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MUMBAI:
        return {...state, mumbaiLoading: true};
      case GET_MUMBAI_SUCCESS:
        return {...state, mumbaiData: action.payload, mumbaiLoading: false};
              case GET_MUMBAI_ERROR:
  return {...state, mumbaiLoading: true, error: true};
      default:
        return state;
    }
  }

  export default mumbaiReducer;
