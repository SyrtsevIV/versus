import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";
import tournamentsList from "./tournamentsListReducer";

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
  tournamentsList
});

export default rootReducer;
