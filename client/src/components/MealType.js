import React from "react";
import { connect } from "react-redux";

function MealType(props) {
  console.log(props);

  const onChange = e => {
    props.setmealType(e.target.value);
  };
  return (
    <select onChange={onChange}>
      <option value={1}>Breakfast</option>
      <option value={2}>Lunch</option>
      <option value={3}>Dinner</option>
      <option value={4}>snack</option>
      <option value={5}>Dessert </option>
    </select>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user
  };
};

export default connect(mapStatetoProps)(MealType);
