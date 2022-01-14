import {
  ADD_USER,
  HIDE_DASHBOARD,
  LOGOUT_USER,
  SHOW_DASHBOARD,
} from "../action_types";

const initialState = {
  user: null,
  toggleDashboard: false,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: null,
        toggleDashboard: false,
      };
    }
    case SHOW_DASHBOARD: {
      return {
        ...state,
        toggleDashboard: !state.toggleDashboard,
      };
    }
    case HIDE_DASHBOARD: {
      return {
        ...state,
        toggleDashboard: false,
      };
    }
    default:
      return state;
  }
}
export default auth;
