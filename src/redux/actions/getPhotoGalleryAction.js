/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Photos} from '../../utilities/urls';

export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR';
export const GET_PHOTOS = 'GET_PHOTOS';

 const getPhotoGalleryAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_PHOTOS,
        });
        const result = await fetch(BaseUrl +CategoryUrl + Photos , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_PHOTOS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getPhotoGalleryAction;
