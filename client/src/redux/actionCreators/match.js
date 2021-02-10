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
  return async (dispatch) => {
    const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerName, plus: true, minus: false }),
    });
    const res = await req.json();
    dispatch({
      type: TYPES.GET_MATCH_DATA,
      payload: res.match,
    });
  };
}

export function minusPoint(id, playerName) {
  return async (dispatch) => {
    const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/match/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerName, plus: false, minus: true }),
    });
    const res = await req.json();
    dispatch({
      type: TYPES.GET_MATCH_DATA,
      payload: res.match,
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
