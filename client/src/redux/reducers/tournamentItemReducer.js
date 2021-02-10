import { GET_TOUR } from "../types/types";
import initState from "../initState";

export default function tournamentItem(state = initState, action) {
  switch (action.type) {
    case GET_TOUR:
      return { ...state, tourItem: action.payload };
    default:
      return state;
  }
}
