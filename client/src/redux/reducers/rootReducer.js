import { combineReducers } from "redux";
import profileStats from "./profileReducer";
import mainPageReducer from "./mainPageStatus/mainPageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  profileStats,
  mainPage: mainPageReducer,
});

export default rootReducer;
