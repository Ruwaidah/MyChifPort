import React from "react";
import { connect } from "react-redux";

function MealType(props) {
  const onChange = e => {
    props.setmealType(e.target.value);
  };
  return (
    <div className="field">
      <span>Meal Type:</span>
      <select onChange={onChange}>
        <option value={1}>Breakfast</option>
        <option value={2}>Lunch</option>
        <option value={3}>Dinner</option>
        <option value={4}>snack</option>
        <option value={5}>Dessert </option>
      </select>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user
  };
};

export default connect(mapStatetoProps)(MealType);
