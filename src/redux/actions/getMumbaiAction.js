/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Mumbai, } from '../../utilities/urls';

export const GET_MUMBAI_SUCCESS = 'GET_MUMBAI_SUCCESS';
export const GET_MUMBAI_ERROR = 'GET_MUMBAI_ERROR';
export const GET_MUMBAI = 'GET_MUMBAI';

 const getMumbaiAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_MUMBAI,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Mumbai, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_MUMBAI_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_MUMBAI_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getMumbaiAction;
