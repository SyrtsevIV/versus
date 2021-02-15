import { GET_MAIN_PAGE_TOURS, ERROR } from '../../../types/types';

const getTours = (mainPageStatus) => async (dispatch) => {
  if (mainPageStatus) {
      try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tabletennis/tournament/${mainPageStatus}`);
      const result = await response.json();
      dispatch({
        type: GET_MAIN_PAGE_TOURS,
        payload: result.reverse(),
     });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          "Упс, что то пошло не так, попробуйте снова или повторите позже",
      });
    }
  } 
}

export default getTours;
