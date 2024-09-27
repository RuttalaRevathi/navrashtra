/* eslint-disable prettier/prettier */
import {BaseUrl, Carrer, CategoryUrl, } from '../../utilities/urls';

export const GET_CAREER = 'GET_CAREER';
export const GET_CAREER_SUCCESS = 'GET_CAREER_SUCCESS';
export const GET_CAREER_ERROR = 'GET_CAREER_ERROR';


export const getCareerAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_CAREER,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Carrer, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CAREER_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_CAREER_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
