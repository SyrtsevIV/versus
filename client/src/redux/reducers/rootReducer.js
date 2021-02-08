import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
});

export default rootReducer;
