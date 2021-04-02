import { combineReducers } from 'redux';
import projectsReducer from './projects';
import filterReducer from './filter';

const rootReducer = combineReducers({ projectData: projectsReducer, filterData: filterReducer });

export default rootReducer;
