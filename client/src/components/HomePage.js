import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { globalRecipes } from "../actions/index.js";
import { register } from "../serviceWorker.js";

function HomePage(props) {
  console.log(sessionStorage.getItem("token"));
  useEffect(() => {
    props.globalRecipes();
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
      <button onClick={login}>Login</button>
      <button onClick={signup}>Register</button>
      <button onClick={() => sessionStorage.clear()}>logout</button>
      {props.recipes.map(recipe => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <h3>{recipe.recipe_name}</h3>
        </Link>
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

export default connect(mapStatetoProps, { globalRecipes })(HomePage);
