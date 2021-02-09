import { GET_RATINGS } from '../types/types';

const getRatings = (type = 'mmr') => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/ratings/tabletennis/`);
  const statistics = await response.json();
  statistics.sort((a, b)=> {
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
      payload: statistics.slice(0,20),
    });
};

export default getRatings;
