import { GET_STATS } from '../types/types'

export function getUserProfile(id) {
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/profile/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });
    const result = await request.json();
    console.log(result, 'result');
    dispatch({
      type: GET_STATS,
      payload: result,
    });
  };
}

export default getUserProfile
