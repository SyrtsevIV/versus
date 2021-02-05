import { PUT_STATUS } from '../../types/types';

export default function setMainPage(status) {
    return async (dispatch) => {
    dispatch({
      type: PUT_STATUS,
      payload: status,
    });
  };
  
}
