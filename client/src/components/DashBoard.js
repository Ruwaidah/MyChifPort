import React from "react";
import { connect } from "react-redux";

function DashBoard(props) {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isloading: state.isloading,
    user: state.user
  };
};
export default connect(mapStatetoProps)(DashBoard);
