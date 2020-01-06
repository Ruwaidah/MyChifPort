import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage.js";
import { Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import PrivateRoute from "./components/PrivateRoute.js";
import DashBoard from "./components/DashBoard.js";
import AddRecipes from "./components/AddRecipes.js";
import UpdateRecipe from "./components/UpdateRecipe";
import Recipe from "./components/Recipe";

function App() {
  const [viewLogin, setViewLogin] = useState(false);
  const [viewSignUp, setViewSignUp] = useState(false);

  return (
    <div className="App">
      <PrivateRoute>
        <Route path="/user" render={props => <DashBoard {...props} />} />
        {/* <AddRecipes /> */}
      </PrivateRoute>
      <Route
        exact
        path="/"
        render={props => (
          <HomePage setViewLogin={setViewLogin} setViewSignUp={setViewSignUp} />
        )}
      />
      <Login setViewLogin={setViewLogin} viewLogin={viewLogin} />
      <UpdateRecipe />
      <Register viewSignUp={viewSignUp} setViewSignUp={setViewSignUp} />
      <Route path="/recipes/:id" component={Recipe} />
    </div>
  );
}

export default App;
