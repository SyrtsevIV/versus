import { IN_SESSION, LOGOUT, SIGNUP } from "../../redux/types/types";

export default function authReducer(state = "", { type, payload }) {
  switch (type) {
    case IN_SESSION:
      return { ...state, userSession: payload };
    case LOGOUT:
      return { ...state, userSession: payload };
    case SIGNUP:
      return { ...state, user: payload };

    default:
      return state;
  }
}
