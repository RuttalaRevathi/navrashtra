/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sliderReducer from '../redux/reducers/sliderReducer';
import sportsReducer from '../redux/reducers/sportsReducer';
import businessReducer from '../redux/reducers/businessReducer';
import relatedReducer from '../redux/reducers/relatedReducer';
import photosGalleryReducer from '../redux/reducers/photosGalleryReducer';
import videoReducer from '../redux/reducers/videoReducer';
import articleDetailReducer from '../redux/reducers/articleDetailReducer';
import webstoriesReducer from '../redux/reducers/webstoriesReducer';
import topMenuDataReducer from '../redux/reducers/topMenuDataReducer';
import categoryReducer from '../redux/reducers/categoryReducer';
import tabReducer from './reducers/tabReducer';
import maharashtraReducer from './reducers/maharashtraReducer';
import indiaReducer from './reducers/indiaReducer';
import automobileReducer from './reducers/automobileReducer';
import mumbaiReducer from './reducers/mumbaiReducer';
import worldReducer from './reducers/worldReducer';
import lifestyleReducer from './reducers/lifestyleReducer';
import puneReducer from './reducers/puneReducer';
import viralReducer from './reducers/viralReducer';
import careerReducer from './reducers/careerReducer';
import religionReducer from './reducers/religionReducer';
import technologyReducer from './reducers/technologyReducer';
import moviesReducer from './reducers/moviesReducer';
import specialReducer from './reducers/specialReducer';
import nagpurReducer from './reducers/nagpurReducer';
import crimeReducer from './reducers/crimeReducer';



const rootReducer = combineReducers({
    tab: tabReducer, sliderReducer,automobileReducer,mumbaiReducer,worldReducer,
    sportsReducer, businessReducer, relatedReducer,lifestyleReducer,puneReducer,
    photosGalleryReducer, maharashtraReducer,viralReducer,careerReducer,
    videoReducer, indiaReducer,religionReducer,technologyReducer,moviesReducer,
    articleDetailReducer, webstoriesReducer,specialReducer,crimeReducer,
    topMenuDataReducer, categoryReducer,nagpurReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
