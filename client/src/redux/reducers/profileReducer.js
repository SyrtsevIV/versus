import { GET_STATS, COMPARE_STATS } from '../types/types';

export default function profileStats(state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return {...state, stats:action.payload.stats, user: action.payload.user };
    case COMPARE_STATS:
      return {...state, compare: action.payload};
    default:
      return state;
  }
}

