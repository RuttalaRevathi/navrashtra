/* eslint-disable prettier/prettier */

import {
    GET_CAREER,
    GET_CAREER_SUCCESS,
    GET_CAREER_ERROR,
  } from '../actions/getCareerAction';

  const initialState = {
    careerData: [],
    careerLoading: false,
  };

  function careerReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CAREER:
        return { ...state, careerLoading: false };
      case GET_CAREER_SUCCESS:
        return { ...state, careerData: action.payload, careerLoading: true };
      case GET_CAREER_ERROR:
        return { ...state, careerLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (careerReducer);

