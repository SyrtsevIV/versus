import { GET_STATS, COMPARE_STATS, GET_HISTORY, EDIT_AVATAR, EDIT_PROFILE } from '../types/types';

export default function profileStats(state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return {...state, 
        stats:action.payload.stats, 
        user: action.payload.user, 
        rating: action.payload.rating,  
        allPlayerValue:  action.payload.allPlayerValue
      };
    case COMPARE_STATS:
      return {...state, compare: action.payload};
    case EDIT_AVATAR:
      return {...state, user: action.payload }
    case EDIT_PROFILE:
      return {...state, user: action.payload }
    case GET_HISTORY:
      return {...state, history: action.payload }
    default:
      return state;
  }
}

