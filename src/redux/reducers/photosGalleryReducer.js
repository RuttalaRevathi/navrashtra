/* eslint-disable prettier/prettier */

import {
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR,
  } from '../actions/getPhotoGalleryAction';

  const initialState = {
    photosData: [],
    photosLoading: false,
    error: false,
  };

  function photosGalleryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PHOTOS:
        return {...state, photosLoading: true};
      case GET_PHOTOS_SUCCESS:
        return {...state, photosData: action.payload, photosLoading: false};
              case GET_PHOTOS_ERROR:
  return {...state, photosLoading: true, error: true};
      default:
        return state;
    }
  }

  export default photosGalleryReducer;
