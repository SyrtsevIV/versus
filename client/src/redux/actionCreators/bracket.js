import * as TYPES from "../types/types";
import { ERROR } from "../types/types";

export function wsSetBracket(bracket) {
  return async (dispatch) => {
    try {
      dispatch({
        type: TYPES.SET_BRACKET,
        payload: bracket,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          "Упс, что то пошло не так, попробуйте снова или повторите позже",
      });
    }
  };
}

export function getBracket(id, tourId) {
  return async (dispatch) => {
    try {
      const req = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${
          id || tourId
        }`
      );
      const resJson = await req.json();
      await dispatch({
        type: TYPES.SET_BRACKET,
        payload: resJson.bracket,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          "Упс, что то пошло не так, попробуйте снова или повторите позже",
      });
    }
  };
}

export function makeBracket(id, tourId) {
  return async (dispatch) => {
    try {      
      const req = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${
          id || tourId
        }/bracket/new`
      );
      const resJson = await req.json();
      await dispatch({
        type: TYPES.SET_BRACKET,
        payload: resJson,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          "Упс, что то пошло не так, попробуйте снова или повторите позже",
      });
    }
  };
}
