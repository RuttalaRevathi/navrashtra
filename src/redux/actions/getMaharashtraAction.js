// actions/getMaharashtraAction.js
import { BaseUrl, CategoryUrl, Maharashtra } from '../../utilities/urls';

export const GET_MAHARSHTRA_SUCCESS = 'GET_MAHARSHTRA_SUCCESS';
export const GET_MAHARSHTRA_ERROR = 'GET_MAHARSHTRA_ERROR';
export const GET_MAHARSHTRA = 'GET_MAHARSHTRA';

const getMaharashtraAction = () => {
  return async dispatch => {
    dispatch({ type: GET_MAHARSHTRA });

    try {
      const result = await fetch(BaseUrl + CategoryUrl + Maharashtra, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!result.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await result.json();

      if (json) {
        dispatch({ type: GET_MAHARSHTRA_SUCCESS, payload: json });
      } else {
        dispatch({ type: GET_MAHARSHTRA_ERROR });
        console.log('Unable to fetch!');
      }
    } catch (error) {
      dispatch({ type: GET_MAHARSHTRA_ERROR });
      console.error('Error fetching Maharashtra data:', error);
    }
  };
};

export default getMaharashtraAction;
