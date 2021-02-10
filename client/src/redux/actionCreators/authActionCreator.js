import { IN_SESSION, LOGOUT, SIGNUP, SIGNIN } from "../types/types";

export const userInSession = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/in_session`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    const result = await response.json();
    dispatch({ type: IN_SESSION, payload: result });
  };
};

export const logoutUser = () => {
  return async (dispatch, getState) => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    dispatch({ type: LOGOUT, payload: null });
  };
};

export const signupUser = (inputValue, history, setErrorValue) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      const user = result.user;
      dispatch({ type: SIGNUP, payload: user });
      history.push("/");
    } catch (err) {
      setErrorValue("Данный электронный адрес уже занят")
    }
  };
};

export const signinUser = (inputValue, history, setErrorValue) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(inputValue),
      });
      const result = await response.json();
      const user = result.user;
      dispatch({ type: SIGNIN, payload: user });
      history.push("/");
    } catch (err) {
      setErrorValue("Неверный логин или пароль")
    }
  };
};
