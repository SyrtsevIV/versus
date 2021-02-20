import { PUT_STATUS, ERROR } from "../../types/types";

export default function setMainPage(status) {
  return async (dispatch) => {
    try {
      dispatch({
        type: PUT_STATUS,
        payload: status,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          "Упс, что то пошло не так, попробуйте снова или повторите позже",
      });
    }
  };
}
