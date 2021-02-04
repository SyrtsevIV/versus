import { GET_STATS } from '../types/types'

export function getUserProfile() {
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_SERVER_URL}/profile/${id}`);
    const result = await request.json();
    
    dispatch({
      type: GET_STATS,
      payload: result,
    });
  };
}

export default getUserProfile
