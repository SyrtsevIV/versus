import { GET_MAIN_PAGE_TOURS, ERROR } from "../../../types/types";

export default function toursReducer(state = [], { type, payload }) {
  switch (type) {
    case GET_MAIN_PAGE_TOURS:
      return { ...state, status: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
