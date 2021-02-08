import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import matchReducer from './matchReducer';

const rootReducer = combineReducers({
  profileStats,
  mainPage: mainPageReducer,
  matchReducer,
});

export default rootReducer;
