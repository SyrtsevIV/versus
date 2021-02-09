import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import matchReducer from './matchReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";
import ratingsReducer from './ratingsReducer';

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  matchReducer,
  mainPageTours: toursReducer,
  ratings: ratingsReducer,
});

export default rootReducer;
