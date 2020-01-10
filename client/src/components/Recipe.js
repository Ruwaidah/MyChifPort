import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { globalRecipes } from "../actions/index.js";
import { recipeById, deleteRecipe } from "../actions/index.js";

function Recipe(props) {
  useEffect(() => {
    props.recipeById(props.match.params.id);
  }, []);

  if (props.isloading || !props.data)
    return (
      <div id="loading1">
        <h3>Loading...</h3>
      </div>
    );

  return (
    <div className="recipePage">
      <img src={props.data.image} width="350px" height="290px" />
      <h2>{props.data.recipe_name}</h2>
      <div className="recipecotent">
        <span> Meal Type :</span>
        <p>{props.data.mealtype}</p>
      </div>
      <div className="recipecotent">
        <span> Ingredients:</span> <p>{props.data.ingredients}</p>
      </div>
      <div className="recipecotent">
        {" "}
        <span>Instructions:</span> <p>{props.data.instructions}</p>
      </div>
      {sessionStorage.getItem("token") ? (
        <div className="editedelete">
          {" "}
          <Link id="edite" to="/edite">
            edite
          </Link>
          <button
            onClick={() => {
              props.deleteRecipe(props.match.params.id, props.history);
            }}
          >
            delete
          </button>
        </div>
      ) : null}
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

export default connect(mapStatetoProps, { recipeById, deleteRecipe })(Recipe);
