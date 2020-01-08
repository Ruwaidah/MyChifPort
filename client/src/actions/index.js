import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithuth.js";
export const LOADING = "LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const FAILED = "FAILED";
export const RECIPE_FETCH = "RECIPE_FETCH";
export const USER_RECIPES = "USER_RECIPES";

export const GLOBAL_RECIPES_FETCH = "GLOBAL_RECIPES_FETCH";

// Get Global Recipes
export const globalRecipes = () => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get("https://chefportfolio11.herokuapp.com/api/recipes")
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

// Get User Recipes
export const userRecipes = id => dispatch => {
  const authAxios = axiosWithAuth();
  console.log(sessionStorage.getItem("userid"));
  dispatch({
    type: LOADING
  });
  authAxios
    .get(
      `https://chefportfolio11.herokuapp.com/api/auth/user/${sessionStorage.getItem(
        "userid"
      )}`
    )
    .then(respo => {
      console.log(respo);
      dispatch({
        type: USER_RECIPES,
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

// Post Login
export const loginUser = (user, history) => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .post("https://chefportfolio11.herokuapp.com/api/auth/login", user)
    .then(respo => {
      console.log(respo);
      sessionStorage.setItem("token", respo.data.token);
      sessionStorage.setItem("userid", respo.data.user.id);
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

// Post Signup
export const signUp = values => dispatch => {
  console.log(values);
  axios
    .post("https://chefportfolio11.herokuapp.com/api/auth/register", values)
    .then(respo => console.log(respo))
    .catch(error => console.log(error));
};

// Add recipe
export const addRecipe = (values, id) => dispatch => {
  console.log(sessionStorage.getItem("userid"));
  const authAxios = axiosWithAuth();
  console.log(id);
  console.log(values);
  authAxios
    .post(`https://chefportfolio11.herokuapp.com/api/auth/user/3`, values)
    .then(respo => console.log(respo))
    .catch(error => console.log(error));
};

// Recipe By ID
export const recipeById = id => dispatch => {
  console.log(id);
  dispatch({
    type: LOADING
  });
  axios
    .get(`https://chefportfolio11.herokuapp.com/api/recipes/${id}`)
    .then(respo => {
      console.log(respo);
      dispatch({
        type: RECIPE_FETCH,
        payload: respo.data
      });
    })
    .catch(error => console.log(error));
};

// Update Recipe
export const updateRecipe = values => dispatch => {
  const authAxios = axiosWithAuth();

  authAxios
    .put(
      "https://chefportfolio11.herokuapp.com/api/auth/user/recipes/20",
      values
    )
    .then(respo => {
      console.log(respo);
    })
    .catch(error => console.log(error));
};
