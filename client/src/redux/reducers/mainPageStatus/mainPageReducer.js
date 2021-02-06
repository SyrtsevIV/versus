import { PUT_STATUS } from '../../types/types';

export default function mainPageReducer(state = '', {type, payload}) {
  switch (type) {
    case PUT_STATUS:
      return {...state, mainPage: payload};
    default:
      return state;
  }
}

