import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions/index.js";

function AddRecipes(props) {
  const []
  console.log(props.user);
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

  const onSubmit = event => {
    event.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(img);
    // const fd = new FormData();
    // fd.append("image", img, img.name);
    // console.log(fd.append("image", img, img.name));
    reader.onload = e => {
      // console.log(e.target.result);
      // values.image = e.target.result.data;
      props.addRecipe(values, props.user.id);
    };
    values.image = img;
  };
  console.log(img);
  return (
    <div>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        {/* <label htmlFor="image">Image: </label>
        <input
          type="file"
          onChange={onImageChange}
          name="image"
          placeholder="image"
        /> */}
        <label htmlFor="name">Recipe name: </label>
        <input
          onChange={onChange}
          type="name"
          name="recipe_name"
          placeholder="name"
        />
                <label htmlFor="name">Meal Type: </label>
                <select>
                  <option></option>
                </select>

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
