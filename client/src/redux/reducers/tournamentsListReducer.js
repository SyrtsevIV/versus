import { GET_TOUR_LIST, USER_IN_TOUR } from "../types/types";
import initState from "../initState";

export default function tournamentsList(state = initState, action) {
  switch (action.type) {
    case GET_TOUR_LIST:
      return { ...state, tourList: action.payload };
    case USER_IN_TOUR:
      return { ...state, userInTour: action.payload };
    default:
      return state;
  }
}
