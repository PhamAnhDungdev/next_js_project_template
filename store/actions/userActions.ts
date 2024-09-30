//Lưu trữ hành động của user
import { SET_USER, LOGOUT_USER, LOGIN_USER } from './actionTypes';

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const loginUser = () => ({
    type: LOGIN_USER,
})
