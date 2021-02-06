import { IN_SESSION, LOGOUT, SIGNUP } from "../types/types";

export const userInSession = () => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:3001/auth/", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    const res = await response.json();
    dispatch({ type: IN_SESSION, payload: res });
  };
};

export const logoutUser = () => {
  console.log("я тут");
  return async (dispatch, getState) => {
    await fetch("http://localhost:3001/auth/logout", {
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

export const signupUser = async () => {
  return async (dispatch, getState) => {
    const { inputValue } = getState()
    console.log(inputValue);
    const req = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(inputValue),
    });
    const res = await req.json();
    dispatch({ type: SIGNUP, payload: res });
  };
};
