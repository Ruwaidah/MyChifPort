import React, { useState } from "react";
import { connect } from "react-redux";

function Register(props) {
  if (props.viewSignUp)
    return (
      <div>
        <h4>Register</h4>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="username" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="password" />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="email" />
          <label htmlFor="state">State: </label>
          <input type="text" name="state" placeholder="state" />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" placeholder="city" />
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" placeholder="address" />
          <label htmlFor="phone">Phone: </label>
          <input type="number" name="phone" placeholder="phone" />
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

export default connect(mapStatetoProps)(Register);
