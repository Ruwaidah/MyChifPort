import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userRecipes } from "../actions/index.js";

function DashBoard(props) {
  useEffect(() => {
    props.userRecipes(props.user.id);
  }, []);

  return (
    <div className="dash-board">
      <Link to={`/user/${props.user.id}/create-recipe`} className="create">
        {" "}
        Create Recipe
      </Link>
      {props.alluserRecipes.length == 0 ? <p>No recipes</p> : null}
      <div className="recipes-container">
        {props.alluserRecipes.map(recipe => (
          <div key={recipe.id} className="recipeCard">
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <img src={recipe.image} width="350px" height="290px" />
              <h2>{recipe.recipe_name}</h2>
              <h5>{recipe.mealtype}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user,
    alluserRecipes: state.userRecipes
  };
};
export default connect(mapStatetoProps, { userRecipes })(DashBoard);
