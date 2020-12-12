import { SET_CURRENT_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: Object.keys(action.payload).length ? true : false,
      };

    default:
      return state;
  }
}

export default userReducer;
