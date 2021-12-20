import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
export const LOADING = "LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const FAILED = "FAILED";
export const RECIPE_FETCH = "RECIPE_FETCH";
export const USER_RECIPES = "USER_RECIPES";
export const ADDING_RECIPE = "ADDING_RECIPE";
export const CLEANNING = "CLEANNING";

export const GLOBAL_RECIPES_FETCH = "GLOBAL_RECIPES_FETCH";

// Get Global Recipes
export const globalRecipes = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  axiosWithAuth()
    .get("api/recipes")
    .then((respo) => {
      dispatch({
        type: GLOBAL_RECIPES_FETCH,
        payload: respo.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: FAILED,
        payload: error,
      })
    );
};

// Get User Recipes
export const userRecipes = (id) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  axiosWithAuth()
    .get(`api/auth/user/${sessionStorage.getItem("userid")}`)
    .then((respo) => {
      dispatch({
        type: USER_RECIPES,
        payload: respo.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: FAILED,
        payload: error,
      })
    );
};

// Post Login
export const loginUser = (user, history, showlogin) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  axiosWithAuth()
    .post("api/auth/login", user)
    .then((respo) => {
      showlogin(false);
      sessionStorage.setItem("token", respo.data.token);
      sessionStorage.setItem("userid", respo.data.user.id);
      dispatch({
        type: LOGIN_FETCH,
        payload: respo.data.user,
      });
      history.push("/user");
    })
    .catch((error) =>
      dispatch({
        type: FAILED,
        payload: error,
      })
    );
};

// Post Signup
export const signUp = (values, showsignup) => (dispatch) => {
  axiosWithAuth()
    .post("api/auth/register", values)
    .then((respo) => {
      showsignup(false);
    })
    .catch((error) =>
      dispatch({
        type: FAILED,
        payload: error,
      })
    );
};

// Add Recipe
export const addRecipe = (image, values, history) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  axiosWithAuth()
    .post(`api/auth/user/image`, image)
    .then((imageId) => {
      values.image = imageId.data;

      axiosWithAuth()
        .post(`api/auth/user/${sessionStorage.getItem("userid")}`, values)
        .then((respo) => {
          dispatch({ type: ADDING_RECIPE, payload: respo });
          history.push("/user");
        });
      // addRecipe(values, imageId, id);
    })
    .catch((error) => console.log(error));
};

// Recipe By ID
export const recipeById = (id) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  axiosWithAuth()
    .get(`api/recipes/${id}`)
    .then((respo) => {
      dispatch({
        type: RECIPE_FETCH,
        payload: respo.data,
      });
    })
    .catch((error) => console.log(error));
};

// Update Recipe
export const updateRecipe = (values, id, history) => (dispatch) => {
  axiosWithAuth()
    .put(`api/auth/user/recipes/${id}`, values)
    .then((respo) => {
      dispatch({ type: ADDING_RECIPE, payload: respo });
      history.push(`/recipes/${id}`);
    })
    .catch((error) => console.log(error));
};

// Delete Recipe
export const deleteRecipe = (id, history) => (dispatch) => {
  axiosWithAuth()
    .delete(`api/auth/user/recipes/${id}`)
    .then((respo) => {
      dispatch({ type: ADDING_RECIPE, payload: respo });
      history.push("/user");
    })
    .catch((error) => console.log(error));
};

export const cleanState = () => (dispatch) => {
  dispatch({ type: CLEANNING });
};
