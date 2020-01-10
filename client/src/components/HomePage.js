import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { globalRecipes } from "../actions/index.js";
import { register } from "../serviceWorker.js";

function HomePage(props) {
  console.log(props.viewLogin);
  useEffect(() => {
    props.globalRecipes();
  }, []);

  if (props.isloading) return <h3>Loading</h3>;
  return (
    <div
      className={
        props.viewLogin || props.viewSignUp
          ? "foggy recipes-container"
          : "recipes-container"
      }
    >
      {sessionStorage.getItem("token") ? <Redirect to="/user" /> : null}

      {props.recipes.map(recipe => (
        <div key={recipe.id} className="recipeCard">
          <Link to={`/recipes/${recipe.id}`}>
            <img src={recipe.image} width="200px" />
            <h3>{recipe.recipe_name}</h3>
            <h5>{recipe.mealtype}</h5>
          </Link>
        </div>
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
