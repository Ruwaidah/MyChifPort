import React, { useState } from "react";
import { connect } from "react-redux";
import { updateRecipe } from "../actions/index.js";

function UpdateRecipe(props) {
  console.log(props.data);
  const mealType = ["Breakfast", "Lunch", "Dinner", "snack", "Dessert"];
  const [values, setValues] = useState({
    recipe_name: props.data.recipe_name,
    mealtype: props.data.meal_type_id,
    ingredients: props.data.ingredients,
    instructions: props.data.instructions
  });
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  console.log(values);
  const onSubmit = event => {
    event.preventDefault();
    props.updateRecipe(values, props.data.id);
  };

  return (
    <div>
      <h4>Update Recipe</h4>
      <form onSubmit={onSubmit} className="create-form">
        <div className="field">
          <label htmlFor="recipe_name">recipe_name: </label>
          <input
            value={values.recipe_name}
            type="text"
            name="recipe_name"
            placeholder="recipe_name"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="field">
          <span>Meal Type:</span>

          <select
            value={props.data.meal_type_id}
            onChange={handleChange}
            name="mealtype"
          >
            {mealType.map((meal, index) => (
              <option key={index} value={index + 1}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ingredients">ingredients: </label>
          <input
            value={values.ingredients}
            type="ingredients"
            name="ingredients"
            placeholder="ingredients"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="instructions">ingredients: </label>
          <input
            value={values.instructions}
            type="instructions"
            name="instructions"
            placeholder="instructions"
            onChange={handleChange}
          />
        </div>
        <div className="field create-btns">
          <button type="submit">Edite</button>
          <button onClick={() => props.history.goBack()}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    data: state.data
  };
};

export default connect(mapStatetoProps, { updateRecipe })(UpdateRecipe);
