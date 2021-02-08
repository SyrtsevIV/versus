import { GET_TOUR_LIST } from '../types/types';
import initState from '../initState'

export default function tournamentsList(state = initState, action) {
  switch (action.type) {
    case GET_TOUR_LIST:
      return {...state, tourList: action.payload }
    default:
      return state;
  }
}
