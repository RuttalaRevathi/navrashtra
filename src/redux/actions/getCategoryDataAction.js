/* eslint-disable prettier/prettier */



export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR';
export const GET_CATEGORY = 'GET_CATEGORY';

 const getCategoryDataAction = (url) => {
    try {
      return async dispatch => {
        dispatch({
          type: GET_CATEGORY,
        });
        const result = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
       
        if (json) {
          dispatch({
            type: GET_CATEGORY_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_CATEGORY_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCategoryDataAction;
