import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithuth.js";
export const LOADING = "LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const FAILED = "FAILED";

export const GLOBAL_RECIPES_FETCH = "GLOBAL_RECIPES_FETCH";

export const globalRecipes = () => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get("https://chefportfolio11.herokuapp.com/api/recipes")
    .then(respo => {
      dispatch({
        type: GLOBAL_RECIPES_FETCH,
        payload: respo.data
      });
    })
    .catch(error =>
      dispatch({
        type: FAILED,
        payload: error
      })
    );
};

export const loginUser = (user, history) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .post("https://chefportfolio11.herokuapp.com/api/auth/login", user)
    .then(respo => {
      sessionStorage.setItem("token", respo.data.token);
      dispatch({
        type: LOGIN_FETCH,
        payload: respo.data.user
      });
      history.push("/user");
    })
    .catch(error =>
      dispatch({
        type: FAILED,
        payload: error
      })
    );
};
