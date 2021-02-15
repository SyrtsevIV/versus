import * as TYPES from "../types/types";
import { ERROR } from "../types/types";

export default function bracketReducer(state = [], action) {
  switch (action.type) {
    case TYPES.SET_BRACKET:
      return { ...state, bracket: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
