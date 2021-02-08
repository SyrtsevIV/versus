import * as TYPES from '../types/match';

export default function matchReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.GET_MATCH_DATA:
      return { ...state, match: action.payload };
    default:
      return state;
  }
}
