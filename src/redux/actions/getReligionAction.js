/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Religion, } from '../../utilities/urls';

export const GET_RELIGION_SUCCESS = 'GET_RELIGION_SUCCESS';
export const GET_RELIGION_ERROR = 'GET_RELIGION_ERROR';
export const GET_RELIGION = 'GET_RELIGION';

 const getReligionAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_RELIGION,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Religion, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_RELIGION_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_RELIGION_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getReligionAction;
