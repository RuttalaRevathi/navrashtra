/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, MainMenuUrl, MenuUrl, Telangana} from '../../utilities/urls';

export const GET_TOP_MENU_DATA_SUCCESS = 'GET_TOP_MENU_DATA_SUCCESS';
export const GET_TOP_MENU_DATA_ERROR = 'GET_TOP_MENU_DATA_ERROR';
export const GET_TOP_MENU_DATA = 'GET_TOP_MENU_DATA';

 const getTopMenuDataAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_TOP_MENU_DATA,
        });
        const result = await fetch(BaseUrl + MainMenuUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_TOP_MENU_DATA_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_TOP_MENU_DATA_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getTopMenuDataAction;
