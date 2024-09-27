/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Special} from '../../utilities/urls';

export const GET_SPECIAL = 'GET_SPECIAL';
export const GET_SPECIAL_SUCCESS = 'GET_SPECIAL_SUCCESS';
export const GET_SPECIAL_ERROR = 'GET_SPECIAL_ERROR';

export const getSpecialAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_SPECIAL,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Special, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_SPECIAL_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_SPECIAL_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
