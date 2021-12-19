import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp, cleanState } from "../actions/index.js";
import "./register.scss";

function Register(props) {
  const [values, setValues] = useState({
    username: null,
    firstname: null,
    lastname: null,
    password: null,
    email: null,
    phone: null,
    address: null,
    city: null,
    state: null,
  });
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // props.setViewSignUp(false);
    props.signUp(values, props.setViewSignUp);
  };
  if (props.viewSignUp)
    return (
      <div className="loginform" id="signupform">
        <h4>Register</h4>
        {props.error && <p className="errorMsg">{props.error}</p>}
        <form onSubmit={onSubmit} id="signup">
          <div className="field">
            {/* <label htmlFor="firstname">firstname: </label> */}
            <span>*</span>
            <input
              onChange={onChange}
              type="text"
              name="firstname"
              placeholder="firstname"
            />
          </div>
          <div className="field">
            {/* <label htmlFor="lastname">lastname: </label> */}
            <span>*</span>
            <input
              onChange={onChange}
              type="text"
              name="lastname"
              placeholder="lastname"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="username">Username: </label> */}
            <span>*</span>
            <input
              onChange={onChange}
              type="text"
              name="username"
              placeholder="username"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="password">Password: </label> */}
            <span>*</span>
            <input
              onChange={onChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="email">Email: </label> */}
            <span>*</span>
            <input
              onChange={onChange}
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="field">
            {/* <label htmlFor="state">State: </label> */}
            <input
              className="notreq"
              onChange={onChange}
              type="text"
              name="state"
              placeholder="state"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="city">City: </label> */}
            <input
              className="notreq"
              onChange={onChange}
              type="text"
              name="city"
              placeholder="city"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="address">Address: </label> */}
            <input
              className="notreq"
              onChange={onChange}
              type="text"
              name="address"
              placeholder="address"
            />
          </div>{" "}
          <div className="field">
            {/* <label htmlFor="phone">Phone: </label> */}
            <input
              className="notreq"
              onChange={onChange}
              type="number"
              name="phone"
              placeholder="phone"
            />
          </div>
          <div className="field">
            {/* <label htmlFor="zipcode">zipcode: </label> */}
            <input
              className="notreq"
              onChange={onChange}
              type="number"
              name="zipcode"
              placeholder="zipcode"
            />
          </div>{" "}
          <br />
          <div className="loginbtn">
            <button type="submit">Register</button>
            <button
              onClick={() => {
                props.cleanState();
                props.setViewSignUp(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  else {
    return null;
  }
}

const mapStatetoProps = (state) => {
  return {
    isloading: state.isloading,
    error: state.error,
  };
};

export default connect(mapStatetoProps, { signUp, cleanState })(Register);
