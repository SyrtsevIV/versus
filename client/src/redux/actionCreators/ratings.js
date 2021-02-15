import { GET_RATINGS, ERROR } from "../types/types";

const getRatings = (type = "mmr") => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/ratings/tabletennis/`
    );
    const statistics = await response.json();
    statistics.sort((a, b) => {
      if (a[type] < b[type]) {
        return 1;
      }
      if (a[type] > b[type]) {
        return -1;
      }
      return 0;
    });
    dispatch({
      type: GET_RATINGS,
      payload: statistics.slice(0, 20),
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Упс, что то пошло не так, попробуйте снова или повторите позже",
    });
  }
};

export default getRatings;
