/* eslint-disable prettier/prettier */
import {
    GET_SPECIAL,
    GET_SPECIAL_SUCCESS,
    GET_SPECIAL_ERROR,
  } from '../actions/getSpecialAction';

  const initialState = {
    specialData: [],
    specialLoading: false,
  };

  function  specialReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SPECIAL:
        return { ...state, specialLoading: false };
      case GET_SPECIAL_SUCCESS:
        return { ...state, specialData: action.payload, specialLoading: true };
      case GET_SPECIAL_ERROR:
        return { ...state, specialLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (specialReducer);

