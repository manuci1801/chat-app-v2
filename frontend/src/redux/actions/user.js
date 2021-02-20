import jwtDecode from "jwt-decode";

const { SET_CURRENT_USER } = require("../types");

export const signIn = data => dispatch => {
  const { token } = data;
  console.log(token);
  if (!token) return;
  const decoded = jwtDecode(token);
  console.log(decoded);
  if (decoded && decoded.exp > Date.now() / 1000) {
    localStorage.setItem("auth-token", token);
    dispatch(setCurrentUser(decoded));
  }
};

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});
