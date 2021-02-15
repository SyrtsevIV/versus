import {
  GET_STATS,
  COMPARE_STATS,
  GET_HISTORY,
  CUSTOM_PROFILE,
  EDIT_AVATAR,
  EDIT_PROFILE,
  ERROR
} from "../types/types";

export default function profileStats(state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        stats: action.payload.stats,
        user: action.payload.user,
        rating: action.payload.rating,
        allPlayerValue: action.payload.allPlayerValue,
        customProfile: action.payload.user.customProfile,
      };
    case COMPARE_STATS:
      return { ...state, compare: action.payload };
    case EDIT_AVATAR:
      return { ...state, user: action.payload };
    case EDIT_PROFILE:
      return { ...state, user: action.payload };
    case GET_HISTORY:
      return { ...state, history: action.payload };
    case CUSTOM_PROFILE:
      return { ...state, customProfile: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
