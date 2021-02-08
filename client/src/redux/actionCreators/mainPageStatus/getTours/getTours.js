import { GET_MAIN_PAGE_TOURS } from '../../../types/types';

const getTours = (mainPageStatus) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${mainPageStatus}`);
  const result = await response.json();
  if (result.length) {
    window.history.replaceState({}, '', `/tabletennis/tournament/${result[0]._id}`);
  } else {
    window.history.replaceState({}, '', `/tabletennis/tournament/`);
  }
  dispatch({
    type: GET_MAIN_PAGE_TOURS,
    payload: result,
 });
}

export default getTours;

export function slideHandler (index, tours ) {
        const tour = tours.find((el, i) => i === index);
      window.history.replaceState({},'', `/tabletennis/tournament/${tour._id}`);
}
