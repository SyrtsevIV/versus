import { GET_TOUR_LIST, USER_IN_TOUR, ERROR } from "../types/types";

// Получение стастики авторизованного пользователя
export function getTournamentsList() {
  return async (dispatch) => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tournamentlist`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const result = await request.json();
      const past = result.tournamentsList.filter((el) => el.status === "past");
      const current = result.tournamentsList.filter(
        (el) => el.status === "current"
      );
      const future = result.tournamentsList.filter(
        (el) => el.status === "future"
      );
      if (result.userInTournaments) {
        dispatch({
          type: USER_IN_TOUR,
          payload: result.userInTournaments,
        });
      }
      dispatch({
        type: GET_TOUR_LIST,
        payload: { past, current, future },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Упс, что то пошло не так, попробуйте снова или повторите позже',
      });
    }
  };
}
