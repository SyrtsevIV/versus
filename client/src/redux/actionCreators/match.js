import * as TYPES from "../types/match";
import { ERROR } from "../types/types";

export function getMatchData(id) {
  return async (dispatch) => {
    try {
      const req = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/${id}`
      );
      const res = await req.json();
      dispatch({
        type: TYPES.GET_MATCH_DATA,
        payload: res.match,
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

export function plusPoint(id, playerName) {
  return async (dispatch, getState) => {
    try {
      const score = (getState().match.match.score[playerName] += 1);
      dispatch({
        type: TYPES.CHANGE_SCORE,
        payload: {
          playerName,
          score,
        },
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

export function minusPoint(id, playerName) {
  return async (dispatch, getState) => {
    try {
      let score = getState().match.match.score[playerName];
      if (score > 0) {
        score -= 1;
      }
      dispatch({
        type: TYPES.CHANGE_SCORE,
        payload: {
          playerName,
          score,
        },
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

export function endMatch(id, timer) {
  return async (dispatch) => {
    try {
      const req = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/end/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
          },
          body: JSON.stringify({ timer }),
        }
      );
      const res = await req.json();
      dispatch({
        type: TYPES.GET_MATCH_DATA,
        payload: res.match,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Упс, что то пошло не так, попробуйте снова или повторите позже',
      });
    }
  };
}
