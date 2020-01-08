import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userRecipes } from "../actions/index.js";

function DashBoard(props) {
  console.log(props.user);

  useEffect(() => {
    props.userRecipes(props.user.id);
  }, []);

  return (
    <div>
      <h1>Welcome {props.user.username}</h1>
      <button
        onClick={() => {
          sessionStorage.clear();
          props.history.push("/");
          props.setViewLogin(false);
        }}
      >
        logout
      </button>
      <Link to={`/user/${props.user.id}/create-recipe`}> Create Recipe</Link>
      {props.alluserRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <img src={recipe.image} width="200px" />
            <h2>{recipe.recipe_name}</h2>
            <h5>{recipe.mealtype}</h5>
            <p>By: {recipe.username}</p>
          </Link>
        </div>
      ))}
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
