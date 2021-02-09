import { GET_STATS, COMPARE_STATS, EDIT_PROFILE } from '../types/types'

// Получение стастики авторизованного пользователя
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
    
    dispatch({
      type: GET_STATS,
      payload: result,
    });
  };
}

// Получение статистики соперника для сравнения
export function findUserStats(login) {
  
  return async (dispatch) => {
    const request = await fetch(`http://localhost:3001/compare/${login}`, {
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
