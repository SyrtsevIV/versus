import * as TYPES from '../types/match';

export function getMatchData(id) {
  return async (dispatch) => {
    const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/${id}`);
    const res = await req.json();
    dispatch({
      type: TYPES.GET_MATCH_DATA,
      payload: res.match,
    });
  };
}

export function plusPoint(id, playerName) {
  return async (dispatch, getState) => {
    const score = (getState().match.match.score[playerName] += 1);
    dispatch({
      type: TYPES.CHANGE_SCORE,
      payload: {
        playerName,
        score,
      },
    });
  };
}

export function minusPoint(id, playerName) {
  return async (dispatch, getState) => {
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
  };
}

export function endMatch(id, timer) {
  return async (dispatch) => {
    const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/end/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ timer }),
    });
    const res = await req.json();
    dispatch({
      type: TYPES.GET_MATCH_DATA,
      payload: res.match,
    });
  };
}
