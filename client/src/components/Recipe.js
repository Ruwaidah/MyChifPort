import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { globalRecipes } from "../actions/index.js";
import { recipeById } from "../actions/index.js";

function Recipe(props) {
  console.log(props);

  console.log("sfsfwfewfw");
  useEffect(() => {
    props.recipeById(props.match.params.id);
  }, []);

  const login = event => {
    props.setViewLogin(true);
  };

  const signup = event => {
    props.setViewSignUp(true);
  };
  if (props.isloading || !props.data) return <h3>Loading</h3>;

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{props.data.recipe_name}</h2>
      <h6>{props.data.ingredients}</h6>
      <h6>{props.data.instructions}</h6>

      <button onClick={login}>edite</button>
      <button onClick={signup}>delete</button>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    recipes: state.recipes,
    isloading: state.isloading,
    data: state.data
  };
};

export default connect(mapStatetoProps, { recipeById })(Recipe);
