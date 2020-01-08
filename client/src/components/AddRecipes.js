import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions/index.js";
import MealType from "./MealType.js";

function AddRecipes(props) {
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
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const onSubmit = event => {
    event.preventDefault();

    // const fd = new FormData();
    // fd.append("image", img, img.name);
    // console.log(fd.append("image", img, img.name));
    var formdata = new FormData();
    formdata.image = img;
    formdata.recipe_name = values.recipe_name;
    formdata.ingredients = values.ingredients;
    formdata.instructions = values.instructions;
    // console.log(e.target.result);
    // values.image = e.target.result.data;
    console.log(formdata);
    formdata.mealtype = 1;
    // values.image = formdata;
    props.addRecipe(formdata, props.user.id);
  };
  console.log(mealType);
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
        <button>Add</button>
        <button onClick={() => props.history.goBack()}>Cancel</button>
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
