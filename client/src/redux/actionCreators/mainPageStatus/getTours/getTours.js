import { GET_MAIN_PAGE_TOURS } from '../../../types/types';

const getTours = (mainPageStatus) => async (dispatch) => {
  if (mainPageStatus) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${mainPageStatus}`);
    const result = await response.json();
    dispatch({
      type: GET_MAIN_PAGE_TOURS,
      payload: result.reverse(),
   });
  }
}

export default getTours;
