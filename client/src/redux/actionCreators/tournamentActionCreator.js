import { CREATE_TOURNAMENT } from "../types/types";

export const createTournament = (inputValue, history) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:3001/tournament/new", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      console.log(result);
      history.push(`/tournament/${result}`);
    } catch (err) {

    }
  };
};
