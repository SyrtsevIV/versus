import { GET_TOUR, ERROR } from "../types/types";
import initState from "../initState";

export default function tournamentItem(state = initState, action) {
  switch (action.type) {
    case GET_TOUR:
      return { ...state, tourItem: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
