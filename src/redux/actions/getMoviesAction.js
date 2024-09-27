/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Movies} from '../../utilities/urls';

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
export const GET_MOVIES = 'GET_MOVIES';

 const getMoviesAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_MOVIES,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Movies, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_MOVIES_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getMoviesAction;
