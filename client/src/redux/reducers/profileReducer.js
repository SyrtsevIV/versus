import { GET_STATS } from '../types/types';

export default function profileStats(state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return action.payload;

    default:
      return state;
  }
}

