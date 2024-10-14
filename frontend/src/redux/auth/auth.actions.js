import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  console.log("clicked");
  console.log(data, "here");
  axios
    .post("https://bigbasketbackend.herokuapp.com/getemail", {
      email: data,
    })
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
      console.log(r.data, "respose");
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};


export const logoutAPI = () => ({ type: LOGOUT });
