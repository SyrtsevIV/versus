import { GET_TOUR_LIST, USER_IN_TOUR, ERROR } from "../types/types";
import initState from "../initState";

export default function tournamentsList(state = initState, action) {
  switch (action.type) {
    case GET_TOUR_LIST:
      return { ...state, tourList: action.payload };
    case USER_IN_TOUR:
      return { ...state, userInTour: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
