import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index.js";

function Login(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.loginUser(values, props.history);
    props.history.push("/user");
  };
  if (!props.viewLogin) return null;
  if (props.viewLogin)
    return (
      <div>
        <h4>LogIn</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />{" "}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <button onClick={() => props.setViewLogin(false)}>Cancel</button>
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

export default connect(mapStatetoProps, { loginUser })(Login);
