import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";
import ratingsReducer from './ratingsReducer';
import matchReducer from './matchReducer';
import tournamentsList from "./tournamentsListReducer";
import tournamentItem from "./tournamentItemReducer";

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
  ratings: ratingsReducer,
  matchReducer,
  tournamentsList,
  tournamentItem,
  
});

export default rootReducer;
