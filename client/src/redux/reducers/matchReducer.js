import * as TYPES from "../types/match";
import { ERROR } from "../types/types";

export default function matchReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.GET_MATCH_DATA:
      return { ...state, match: action.payload };
    case TYPES.CHANGE_SCORE:
      return {
        ...state,
        match: {
          ...state.match,
          score: {
            ...state.match.score,
            [action.payload.playerName]: action.payload.score,
          },
        },
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
