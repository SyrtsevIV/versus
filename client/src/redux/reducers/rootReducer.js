import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';

const rootReducer = combineReducers({
  profileStats,
  mainPage: mainPageReducer,
});

export default rootReducer;
