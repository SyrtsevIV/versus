import * as TYPES from '../types/types';

export function wsSetBracket(bracket) {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SET_BRACKET,
      payload: bracket,
    });
  };
}

export function getBracket(id, tourId) {
  return async (dispatch) => {
    const req = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${id || tourId}`);
    const resJson = await req.json();
    await dispatch({
      type: TYPES.SET_BRACKET,
      payload: resJson.bracket,
    });
  };
}

export function makeBracket(id, tourId) {
  return async (dispatch) => {
    const req = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${id || tourId}/bracket/new`
    );
    const resJson = await req.json();
   await dispatch({
      type: TYPES.SET_BRACKET,
      payload: resJson,
    });
  };
}
