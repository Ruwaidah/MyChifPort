import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser,cleanState } from "../actions/index.js";
import "./login.scss";

function Login(props) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    // props.setViewLogin(false);
    event.preventDefault();
    props.loginUser(values, props.history, props.setViewLogin);
  };
  if (!props.viewLogin) return null;
  if (props.viewLogin)
    return (
      <div className="loginform">
        <h4>Login</h4>
        {props.error && <p className="errorMsg">{props.error}</p>}
        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
          </div>{" "}
          <div className="field">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          <div className="loginbtn">
            <button type="submit">Login</button>
            <button onClick={() =>{props.cleanState(); props.setViewLogin(false)}}>Cancel</button>
          </div>
        </form>
      </div>
    );
}

const mapStatetoProps = (state) => {
  return {
    isloading: state.isloading,
    user: state.user,
    error: state.error,
  };
};

export default connect(mapStatetoProps, { loginUser, cleanState })(Login);
