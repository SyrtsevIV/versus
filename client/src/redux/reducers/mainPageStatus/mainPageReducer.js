import { PUT_STATUS, ERROR } from "../../types/types";

export default function mainPageReducer(state = "", { type, payload }) {
  switch (type) {
    case PUT_STATUS:
      return { ...state, status: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
