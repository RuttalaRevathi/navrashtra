import {
  GET_TRENDING_LOADING,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_ERROR,
} from '../actions/getTrendingAction';

const initialState = {
  trendingData: [],
  trendingLoading: false,
  error: false,
};

function trendingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDING_LOADING:
      return {...state, trendingLoading: true};
    case GET_TRENDING_SUCCESS:
      return {...state, trendingData: action.payload, trendingLoading: false};
    case GET_TRENDING_ERROR:
      return {...state, trendingLoading: false, error: true};
    default:
      return state;
  }
}

export default trendingReducer;
