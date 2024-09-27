/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Technology} from '../../utilities/urls';

export const GET_TECHNOLOGY_SUCCESS = 'GET_TECHNOLOGY_SUCCESS';
export const GET_TECHNOLOGY_ERROR = 'GET_TECHNOLOGY_ERROR';
export const GET_TECHNOLOGY = 'GET_TECHNOLOGY';

 const getTechnologyAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_TECHNOLOGY,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Technology, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_TECHNOLOGY_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_TECHNOLOGY_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getTechnologyAction;
