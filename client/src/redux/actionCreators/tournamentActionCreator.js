import { GET_TOUR } from "../types/types";

export const createTournament = (inputValue, history) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tournament/new`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      history.push(`/tournament/${result}`);
    } catch (err) {
      console.log('from createTournament', err);
    }
  };
};

export const registrationTournamnet = (id) => {
  return async (dispatch) => {
    try {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/tournament/reg`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.log("ERROR FROM registrationTournamnet");
    }
  };
};

export const getTournament = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tournament/${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const result = await response.json();
      dispatch({
        type: GET_TOUR,
        payload: result,
      });
    } catch (err) {
      console.log("ERROR FROM getTournament");
    }
  };
};

export const changeTournamentStatus = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tournament/status/${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const result = await response.json();
      dispatch({
        type: GET_TOUR,
        payload: result,
      });
    } catch (err) {
      console.log("ERROR FROM getTournament");
    }
  };
};
