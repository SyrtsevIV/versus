import { GET_TOUR_LIST } from '../types/types'

// Получение стастики авторизованного пользователя
export function getTournamentsList() {
  return async (dispatch) => {
    console.log('я тут');
    const request = await fetch(`${process.env.REACT_APP_SERVER_URL}/tournamentlist`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
      credentials: 'include',
    });

    const result = await request.json();
    
    const past = result.filter((el) => (
      el.status === 'past'
    ));

    const current = result.filter((el) => (
      el.status === 'current'
    ));
    
    const future = result.filter((el) => (
      el.status === 'future'
    ))

    dispatch({
      type: GET_TOUR_LIST,
      payload: { past, current, future },
    });
  };
}
