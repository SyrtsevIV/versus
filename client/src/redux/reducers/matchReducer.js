import * as TYPES from '../types/match';

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
    default:
      return state;
  }
}
