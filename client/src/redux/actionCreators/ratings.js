import { GET_RATINGS } from '../types/types';

const getRatings = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/ratings/tabletennis/`);
  const result = await response.json();
  result.sort(function (a, b) {
  if (a.mmr < b.mmr) {
    return 1;
  }
  if (a.mmr > b.mmr) {
    return -1;
  }
  return 0;
});
    dispatch({
      type: GET_RATINGS,
      payload: result,
    });
};

export default getRatings;
