import { GET_RATINGS, ERROR } from "../types/types";

export default function ratingsReducer(state = {}, { type, payload }) {
  switch (type) {
    case GET_RATINGS:
      return { ...state, tableTennis: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
