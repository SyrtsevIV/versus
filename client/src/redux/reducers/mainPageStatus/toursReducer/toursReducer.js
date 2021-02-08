import { GET_MAIN_PAGE_TOURS } from '../../../types/types';

export default function toursReducer(state = [], {type, payload}) {
  switch (type) {
    case GET_MAIN_PAGE_TOURS:
      return payload;
    default:
      return state;
  }
}

