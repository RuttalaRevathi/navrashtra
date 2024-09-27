/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Mahabubnagar} from '../../utilities/urls';

export const GET_MAHABUBNAGAR = 'GET_MAHABUBNAGAR';
export const GET_MAHABUBNAGAR_SUCCESS = 'GET_MAHABUBNAGAR_SUCCESS';
export const GET_MAHABUBNAGAR_ERROR = 'GET_MAHABUBNAGAR_ERROR';

export const getMahabubnagarAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MAHABUBNAGAR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Mahabubnagar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MAHABUBNAGAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MAHABUBNAGAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
