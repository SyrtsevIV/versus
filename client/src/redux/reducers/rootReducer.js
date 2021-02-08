import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";
import ratingsReducer from './ratingsReducer';
import matchReducer from './matchReducer';

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
  ratings: ratingsReducer,
  matchReducer,
});

export default rootReducer;
