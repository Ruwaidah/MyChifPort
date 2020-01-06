import React, { useState } from "react";
import { connect } from "react-redux";
import { updateRecipe } from "../actions/index.js";

function UpdateRecipe(props) {
  console.log(props);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.updateRecipe(values, props.history);
  };

  return (
    <div>
      <h4>Update Recipe</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="recipe_name">recipe_name: </label>
        <input
          type="text"
          name="recipe_name"
          placeholder="recipe_name"
          onChange={handleChange}
        />{" "}
        <label htmlFor="ingredients">ingredients: </label>
        <input
          type="ingredients"
          name="ingredients"
          placeholder="ingredients"
          onChange={handleChange}
        />
        <label htmlFor="instructions">ingredients: </label>
        <input
          type="instructions"
          name="instructions"
          placeholder="instructions"
          onChange={handleChange}
        />
        <button type="submit">Edite</button>
        <button onClick={() => props.setViewLogin(false)}>Cancel</button>
      </form>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user
  };
};

export default connect(mapStatetoProps, { updateRecipe })(UpdateRecipe);
