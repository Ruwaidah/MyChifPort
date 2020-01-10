import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions/index.js";
import MealType from "./MealType.js";
import { axiosWithAuth } from "./axiosWithuth.js";

function AddRecipes(props) {
  console.log("useris", props.match.params.id);
  const [mealType, setmealType] = useState();
  const [img, setImage] = useState();

  const [values, setValues] = useState({
    recipe_name: "",
    ingredients: "",
    instructions: "",
    mealtype: mealType
  });
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const onImageChange = event => {
    setImage(event.target.files[0]);
  };

  const onSubmit = async event => {
    event.preventDefault();
    const formdata = new FormData();
    if (img) formdata.append("image", img, img.name);
    values.mealtype = mealType;
    props.addRecipe(formdata, values, props.history);
  };
  return (
    <div className="recipes-container">
      <form onSubmit={onSubmit} className="create-form">
        <div className="field">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            onChange={onImageChange}
            name="image"
            placeholder="image"
          />
        </div>
        <div className="field">
          <label htmlFor="name">Recipe name: </label>
          <input
            onChange={onChange}
            type="name"
            name="recipe_name"
            placeholder="name"
          />
        </div>
        <MealType setmealType={setmealType} />
        <div className="field">
          <label htmlFor="ingredients">ingredients: </label>
          <textarea
            onChange={onChange}
            type="ingredients"
            name="ingredients"
            placeholder="ingredients"
          />
        </div>
        <div className="field">
          <label htmlFor="instructions">instructions: </label>
          <textarea
            onChange={onChange}
            type="instructions"
            name="instructions"
            placeholder="instructions"
          />
        </div>
        <div className="field create-btns">
          <button type="submit">Add</button>
          <button onClick={() => props.history.push("/user")}>Cancel</button>
        </div>
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

export default connect(mapStatetoProps, { addRecipe })(AddRecipes);
