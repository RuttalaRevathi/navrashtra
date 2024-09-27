/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Crime, } from '../../utilities/urls';

export const GET_CRIME = 'GET_CRIME';
export const GET_CRIME_SUCCESS = 'GET_CRIME_SUCCESS';
export const GET_CRIME_ERROR = 'GET_CRIME_ERROR';


export const getCrimeAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_CRIME,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Crime, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CRIME_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_CRIME_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
