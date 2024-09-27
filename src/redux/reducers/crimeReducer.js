/* eslint-disable prettier/prettier */

import {
    GET_CRIME,
    GET_CRIME_SUCCESS,
    GET_CRIME_ERROR,
  } from '../actions/getCrimeAction';

  const initialState = {
    crimeData: [],
    crimeLoading: false,
  };

  function crimeReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CRIME:
        return { ...state, crimeLoading: false };
      case GET_CRIME_SUCCESS:
        return { ...state, crimeData: action.payload, crimeLoading: true };
      case GET_CRIME_ERROR:
        return { ...state, crimeLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (crimeReducer);

