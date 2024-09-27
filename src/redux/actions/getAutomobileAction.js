/* eslint-disable prettier/prettier */

import { Automobile, BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_AUTOMOBILE_SUCCESS = 'GET_AUTOMOBILE_SUCCESS';
export const GET_AUTOMOBILE_ERROR = 'GET_AUTOMOBILE_ERROR';
export const GET_AUTOMOBILE = 'GET_AUTOMOBILE';

 const getAutomobileAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_AUTOMOBILE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Automobile, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_AUTOMOBILE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_AUTOMOBILE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getAutomobileAction;
