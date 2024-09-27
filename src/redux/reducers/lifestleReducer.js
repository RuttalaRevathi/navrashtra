/* eslint-disable prettier/prettier */
import {
    GET_MEDAK,
    GET_MEDAK_SUCCESS,
    GET_MEDAK_ERROR,
  } from '../actions/getMedakAction';


  const initialState = {
    medakData: [],
    medakLoading: false,
  };

  // adilabad
  function  medakReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MEDAK:
        return { ...state, medakLoading: false };
      case GET_MEDAK_SUCCESS:
        return { ...state, medakData: action.payload, medakLoading: true };
      case GET_MEDAK_ERROR:
        return { ...state, medakLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (medakReducer);

