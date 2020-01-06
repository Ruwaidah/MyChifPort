import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions/index.js";

function Register(props) {
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: ""
  });
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(values);
    props.signUp(values);
  };
  if (props.viewSignUp)
    return (
      <div>
        <h4>Register</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="firstname">firstname: </label>
          <input
            onChange={onChange}
            type="text"
            name="firstname"
            placeholder="firstname"
          />
          <label htmlFor="lastname">lastname: </label>
          <input
            onChange={onChange}
            type="text"
            name="lastname"
            placeholder="lastname"
          />
          <label htmlFor="username">Username: </label>
          <input
            onChange={onChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <label htmlFor="password">Password: </label>
          <input
            onChange={onChange}
            type="password"
            name="password"
            placeholder="password"
          />
          <label htmlFor="email">Email: </label>
          <input
            onChange={onChange}
            type="email"
            name="email"
            placeholder="email"
          />
          <label htmlFor="state">State: </label>
          <input
            onChange={onChange}
            type="text"
            name="state"
            placeholder="state"
          />
          <label htmlFor="city">City: </label>
          <input
            onChange={onChange}
            type="text"
            name="city"
            placeholder="city"
          />
          <label htmlFor="address">Address: </label>
          <input
            onChange={onChange}
            type="text"
            name="address"
            placeholder="address"
          />
          <label htmlFor="phone">Phone: </label>
          <input
            onChange={onChange}
            type="number"
            name="phone"
            placeholder="phone"
          />
          <label htmlFor="zipcode">zipcode: </label>
          <input
            onChange={onChange}
            type="number"
            name="zipcode"
            placeholder="zipcode"
          />
          <button>Register</button>
          <button onClick={() => props.setViewSignUp(false)}>Cancel</button>
        </form>
      </div>
    );
  else {
    return null;
  }
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading
  };
};

export default connect(mapStatetoProps, { signUp })(Register);
