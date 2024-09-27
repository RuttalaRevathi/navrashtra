/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Pune} from '../../utilities/urls';

export const GET_PUNE_SUCCESS = 'GET_PUNE_SUCCESS';
export const GET_PUNE_ERROR = 'GET_PUNE_ERROR';
export const GET_PUNE = 'GET_PUNE';

 const getPuneAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_PUNE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Pune, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_PUNE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_PUNE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getPuneAction;
