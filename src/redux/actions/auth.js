import { ADD_USER, HIDE_DASHBOARD, LOGOUT_USER,SHOW_DASHBOARD } from "../action_types";

export function userProfile(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
export function showDashboard() {
  return {
    type: SHOW_DASHBOARD,
  };
}

export function hideDashboard() {
  return {
    type: HIDE_DASHBOARD,
  };
}
