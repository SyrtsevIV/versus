import { GET_STATS, COMPARE_STATS, EDIT_PROFILE } from '../types/types'

// Получение стастики авторизованного пользователя
export function getUserProfile(id) {
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_SERVER_URL}/profile/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });
    const result = await request.json();
    
    dispatch({
      type: GET_STATS,
      payload: result,
    });
  };
}

// Получение статистики соперника для сравнения
export function findUserStats(login) {
  
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_SERVER_URL}/compare/${login}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });
    const result = await request.json();
    
    dispatch({
      type: COMPARE_STATS,
      payload: result
    })
  }
}

// export function getUserHistory(id) => {
  
//   return async (dispatch) {
//     const request = await fetch('', {
//       method: 'GET',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       credentials: 'include',
//     });
    
//     const result = await request.json();

//     dispatch({
//       type: COMPARE_STATS,
//       payload: result
//     })
//   }
// }
