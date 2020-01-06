import {
  LOADING,
  GLOBAL_RECIPES_FETCH,
  FAILED,
  LOGIN_FETCH
} from "../actions/index.js";

const initiallstate = {
  recipes: [],
  user: {},
  isloading: false,
  error: null
};

export const rootReducer = (state = initiallstate, actions) => {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case GLOBAL_RECIPES_FETCH:
      console.log(actions.payload);
      return {
        ...state,
        recipes: actions.payload,
        isloading: false,
        error: null
      };
    case FAILED:
      return {
        ...state,
        isloading: false,
        error: actions.payload
      };
    case LOGIN_FETCH:
      console.log(actions.payload);
      return {
        ...state,
        user: actions.payload,
        isloading: false,
        error: null
      };
    default:
      return state;
  }
};
