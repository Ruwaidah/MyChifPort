import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe, uploadImage } from "../actions/index.js";
import MealType from "./MealType.js";
import { axiosWithAuth } from "./axiosWithuth.js";

function AddRecipes(props) {
  console.log("useris", props.match.params.id);
  const [mealType, setmealType] = useState();
  const [img, setImage] = useState();

  const [values, setValues] = useState({
    recipe_name: "",
    ingredients: "",
    instructions: ""
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
    values.mealtype = 1;
    props.uploadImage(formdata, values);

    // values.formdata = formdata;
  };
  // console.log(mealType);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="image">Image: </label>
        <input
          type="file"
          onChange={onImageChange}
          name="image"
          placeholder="image"
        />
        <label htmlFor="name">Recipe name: </label>
        <input
          onChange={onChange}
          type="name"
          name="recipe_name"
          placeholder="name"
        />
        <MealType setmealType={setmealType} />

        <label htmlFor="ingredients">ingredients: </label>
        <textarea
          onChange={onChange}
          type="ingredients"
          name="ingredients"
          placeholder="ingredients"
        />
        <label htmlFor="instructions">instructions: </label>
        <textarea
          onChange={onChange}
          type="instructions"
          name="instructions"
          placeholder="instructions"
        />
        <button type="submit">Add</button>
        <button onClick={() => props.history.push("/user")}>Cancel</button>
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

export default connect(mapStatetoProps, { addRecipe, uploadImage })(AddRecipes);
