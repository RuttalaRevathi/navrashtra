/* eslint-disable prettier/prettier */

import {
    GET_CATEGORY,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_ERROR,
  } from '../actions/getCategoryDataAction';

  const initialState = {
    categoryData: [],
    categoryDataLoading: false,
    error: false,
  };

  function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORY:
        return {...state, categoryDataLoading: true};
      case GET_CATEGORY_SUCCESS:
        return {...state, categoryData: action.payload, categoryDataLoading: false};
              case GET_CATEGORY_ERROR:
  return {...state, categoryDataLoading: true, error: true};
      default:
        return state;
    }
  }

  export default categoryReducer;
