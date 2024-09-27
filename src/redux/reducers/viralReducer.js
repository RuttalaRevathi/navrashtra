/* eslint-disable prettier/prettier */
import {
    GET_VIRAL,
    GET_VIRAL_SUCCESS,
    GET_VIRAL_ERROR,
  } from '../actions/getViralAction';

  const initialState = {
    viralData: [],
    viralLoading: false,
  };

  function viralReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIRAL:
        return { ...state, viralLoading: false };
      case GET_VIRAL_SUCCESS:
        return { ...state, viralData: action.payload, viralLoading: true };
      case GET_VIRAL_ERROR:
        return { ...state, viralLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (viralReducer);

