import React from "react";
import { connect } from "react-redux";
import Image from "../FoodLogo.png";

function Footer(props) {
  return (
    <div className="footer">
      <p> all right reserved 2020 &copy;</p>
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
