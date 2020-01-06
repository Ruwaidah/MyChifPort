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
    .get("https://chefportfolio10.herokuapp.com/api/recipes")
    .then(respo => {
      console.log(respo);
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
    .post("https://chefportfolio10.herokuapp.com/api/auth/login", user)
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

export const signUp = values => dispatch => {
  console.log(values);
  axios
    .post("https://chefportfolio10.herokuapp.com/api/auth/register", values)
    .then(respo => console.log(respo))
    .catch(error => console.log(error));
};

// Add recipe

export const addRecipe = values => dispatch => {
  const authAxios = axiosWithAuth();

  console.log(values);
  authAxios
    .post("https://chefportfolio10.herokuapp.com/api/auth/user/17", values)
    .then(respo => console.log(respo))
    .catch(error => console.log(error));
};

// Recipe By ID
export const recipeById = () => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get("https://chefportfolio10.herokuapp.com/api/recipes/20")
    .then(respo => {
      console.log(respo);
    })
    .catch(error => console.log(error));
};

// Update Recipe
export const updateRecipe = values => dispatch => {
  const authAxios = axiosWithAuth();

  authAxios
    .put(
      "https://chefportfolio10.herokuapp.com/api/auth/user/recipes/20",
      values
    )
    .then(respo => {
      console.log(respo);
    })
    .catch(error => console.log(error));
};
