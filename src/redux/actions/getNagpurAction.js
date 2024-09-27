/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Nagpur, } from '../../utilities/urls';

export const GET_NAGPUR_SUCCESS = 'GET_NAGPUR_SUCCESS';
export const GET_NAGPUR_ERROR = 'GET_NAGPUR_ERROR';
export const GET_NAGPUR = 'GET_NAGPUR';

 const getNagpurAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_NAGPUR,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Nagpur, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_NAGPUR_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_NAGPUR_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getNagpurAction;
