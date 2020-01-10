import React from "react";
import { connect } from "react-redux";
import Image from "../FoodLogo.png";

function Footer(props) {
  return (
    <div className="footer">
      <p> all right reserve 2020</p>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user,
    alluserRecipes: state.userRecipes
  };
};

export default connect(mapStatetoProps)(Footer);
