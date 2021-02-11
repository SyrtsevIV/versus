import { combineReducers } from 'redux';
import profileStats from './profileReducer';
import mainPageReducer from './mainPageStatus/mainPageReducer';
import toursReducer from './mainPageStatus/toursReducer/toursReducer';
import authReducer from "./authReducer";
import ratingsReducer from './ratingsReducer';
import matchReducer from './matchReducer';
import tournamentsList from "./tournamentsListReducer";
import tournamentItem from "./tournamentItemReducer";
import bracketReducer from './bracketReducer';

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
  mainPageTours: toursReducer,
  ratings: ratingsReducer,
  match: matchReducer,
  tournamentsList,
  tournamentItem,
  bracket: bracketReducer,
});

export default rootReducer;
