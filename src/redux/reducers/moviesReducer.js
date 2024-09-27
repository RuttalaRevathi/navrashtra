/* eslint-disable prettier/prettier */

import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
  } from '../actions/getMoviesAction';

  const initialState = {
    moviesData: [],
    moviesLoading: false,
    error: false,
  };

  function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MOVIES:
        return {...state, moviesLoading: true};
      case GET_MOVIES_SUCCESS:
        return {...state, moviesData: action.payload, moviesLoading: false};
              case GET_MOVIES_ERROR:
  return {...state, moviesLoading: true, error: true};
      default:
        return state;
    }
  }

  export default moviesReducer;
