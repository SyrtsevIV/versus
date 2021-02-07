import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';

const rootReducer = combineReducers({
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
});

export default rootReducer;
