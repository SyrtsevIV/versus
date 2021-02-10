import { GET_TOUR_LIST, USER_IN_TOUR } from "../types/types";

// Получение стастики авторизованного пользователя
export function getTournamentsList() {
  return async (dispatch) => {
    try {
      console.log("я тут");
      const request = await fetch(`http://localhost:3001/tournamentlist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await request.json();
      console.log(result);
      const past = result.tournamentsList.filter((el) => el.status === "past");

      const current = result.tournamentsList.filter(
        (el) => el.status === "current"
      );

      const future = result.tournamentsList.filter(
        (el) => el.status === "future"
      );

      dispatch({
        type: USER_IN_TOUR,
        payload: result.userInTournaments,
      });

      dispatch({
        type: GET_TOUR_LIST,
        payload: { past, current, future },
      });
      
    } catch (error) {
      console.log("Блядская ошибка", error);
    }
  };
}
