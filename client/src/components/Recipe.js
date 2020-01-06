import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { globalRecipes } from "../actions/index.js";
import { recipeById } from "../actions/index.js";

function Recipe(props) {
  console.log(sessionStorage.getItem("token"));
  useEffect(() => {
    props.recipeById();
  }, []);
  const login = event => {
    props.setViewLogin(true);
  };

  const signup = event => {
    props.setViewSignUp(true);
  };
  if (props.isloading) return <h3>Loading</h3>;
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={login}>edite</button>
      <button onClick={signup}>delete</button>
      ))}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    recipes: state.recipes,
    isloading: state.isloading
  };
};

export default connect(mapStatetoProps, { recipeById })(Recipe);
