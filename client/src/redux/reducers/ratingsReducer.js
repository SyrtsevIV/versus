import { GET_RATINGS } from '../types/types';

export default function ratingsReducer(state = {}, {type, payload}) {
  switch (type) {
    case GET_RATINGS:
      return {...state, tableTennis : payload };
    default:
      return state;
  }
}

