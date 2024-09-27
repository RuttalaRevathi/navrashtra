/* eslint-disable prettier/prettier */

import {
    GET_MAHARSHTRA,
    GET_MAHARSHTRA_SUCCESS,
    GET_MAHARSHTRA_ERROR,
  } from '../actions/getMaharashtraAction';

  const initialState = {
    maharashtraData: [],
    maharashtraLoading: false,
    error: false,
  };

  function maharashtraReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MAHARSHTRA:
        return {...state, maharashtraLoading: true};
      case GET_MAHARSHTRA_SUCCESS:
        return {...state, maharashtraData: action.payload, maharashtraLoading: false};
              case GET_MAHARSHTRA_ERROR:
  return {...state, maharashtraLoading: true, error: true};
      default:
        return state;
    }
  }

  export default maharashtraReducer;
