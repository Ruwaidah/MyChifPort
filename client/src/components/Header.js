import React from "react";
import { connect } from "react-redux";
// import Image from "../FoodLogo.png";
import Image from "../Food.png"
import "./header.scss"

function Header(props) {
  console.log(Image);
  const login = event => {
    props.setViewLogin(true);
  };

  const signup = event => {
    props.setViewSignUp(true);
  };
  return (
    <div
      className={
        props.viewLogin || props.viewSignUp ? "foggy header" : "header"
      }
    >
      {" "}
      <img src={Image} width="200px" />
      {/* <h2>Let's Eat</h2> */}
      {sessionStorage.getItem("token") ? (
        <button
          className="headerbtns logout"
          onClick={() => {
            sessionStorage.clear();
            props.history.push("/");
            props.setViewLogin(false);
          }}
        >
          logout
        </button>
      ) : (
        <div className="headerbtns">
          <button onClick={login} className="loginhover">
            Login
          </button>
          <button onClick={signup} className="loginhover">
            Register
          </button>{" "}
        </div>
      )}
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

export default connect(mapStatetoProps)(Header);
