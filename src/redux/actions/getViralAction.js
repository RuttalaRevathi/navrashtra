/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Viral} from '../../utilities/urls';

export const GET_VIRAL = 'GET_VIRAL';
export const GET_VIRAL_SUCCESS = 'GET_VIRAL_SUCCESS';
export const GET_VIRAL_ERROR = 'GET_VIRAL_ERROR';

export const getViralAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_VIRAL,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Viral, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {

        dispatch({
          type: GET_VIRAL_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_VIRAL_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
