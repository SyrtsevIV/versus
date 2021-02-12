import { GET_STATS, COMPARE_STATS, EDIT_PROFILE, EDIT_AVATAR, GET_HISTORY, CUSTOM_PROFILE } from '../types/types'

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

// Обновление аватарки
export function editAvatar(file, id) {

  return async (dispatch) => {
    const data = new FormData()
    data.append("filedata", file)

    const response = await fetch(`http://localhost:3001/profile/upload/${id}`, {
      method: "POST",
      body: data,
      credentials: 'include'
    })

    const result = await response.json();

    dispatch({
      type: EDIT_AVATAR,
      payload: result
    })
  }
}


export function getUserHistory(id) {
  
  return async (dispatch) => {
  
    const request = await fetch(`http://localhost:3001/profile/history/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });
    
    const result = await request.json();
    
    dispatch({
      type: GET_HISTORY,
      payload: result
    })
  }
}

export function setCustomProfileDB(uniqArr, id) {
  return async function(dispatch) {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/profile/customProfile/${id}`, {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({uniqArr})
    })
    const result = await res.json();
    dispatch({
      type: CUSTOM_PROFILE,
      payload: result.customProfile,
    });
  }
}
