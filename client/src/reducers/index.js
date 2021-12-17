import {
  LOADING,
  GLOBAL_RECIPES_FETCH,
  FAILED,
  LOGIN_FETCH,
  RECIPE_FETCH,
  USER_RECIPES,
  ADDING_RECIPE,
  CLEANNING
} from "../actions/index.js";

const initiallstate = {
  recipes: [],
  user: {},
  isloading: false,
  error: null,
  data: null,
  userRecipes: []
};

export const rootReducer = (state = initiallstate, actions) => {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        isloading: true,
        error: null,
      };
    case GLOBAL_RECIPES_FETCH:
      console.log(actions.payload);
      return {
        ...state,
        recipes: actions.payload,
        isloading: false,
        error: null,
      };
    case FAILED:
      return {
        ...state,
        isloading: false,
        error: actions.payload.response.data.message,
      };
    case LOGIN_FETCH:
      console.log(actions.payload);
      return {
        ...state,
        user: actions.payload,
        isloading: false,
        error: null,
      };
    case RECIPE_FETCH:
      console.log(actions.payload);
      return {
        ...state,
        data: actions.payload,
        isloading: false,
        error: null,
      };
    case USER_RECIPES:
      console.log(actions.payload);
      return {
        ...state,
        userRecipes: actions.payload,
        isloading: false,
        error: null,
      };

    case CLEANNING:
      return {
        ...state,
        isloading: false,
        error: null,
      };
    case ADDING_RECIPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
