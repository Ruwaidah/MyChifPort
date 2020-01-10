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

  if (props.isloading || !props.data) return <h3>Loading</h3>;

  return (
    <div className="recipePage">
      <img src={props.data.image} width="300px" />
      <h2>{props.data.recipe_name}</h2>
      <div className="recipecotent">
        <span> Ingredients:</span> <p>{props.data.ingredients}</p>
      </div>
      <div className="recipecotent">
        {" "}
        <span>Instructions:</span> <p>{props.data.instructions}</p>
      </div>
      {sessionStorage.getItem("token") ? (
        <div>
          {" "}
          <Link to="/edite">edite</Link>
          <button>delete</button>
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

export default connect(mapStatetoProps, { recipeById })(Recipe);
