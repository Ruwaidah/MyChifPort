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
        <Route
          exact
          path="/user"
          render={props => <DashBoard {...props} setViewLogin={setViewLogin} />}
        />
        <Route
          path="/user/:id/create-recipe"
          render={props => <AddRecipes {...props} />}
        />
        {/* <AddRecipes /> */}
      </PrivateRoute>

      <Route
        exact
        path="/"
        render={props => (
          <HomePage
            setViewLogin={setViewLogin}
            setViewSignUp={setViewSignUp}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={props => (
          <Login {...props} setViewLogin={setViewLogin} viewLogin={viewLogin} />
        )}
      />
      <Route
        exact
        path="/"
        render={props => (
          <Register
            {...props}
            viewSignUp={viewSignUp}
            setViewSignUp={setViewSignUp}
          />
        )}
      />

      <Route
        exact
        path="/edite"
        render={props => <UpdateRecipe {...props} />}
      />

      <Route
        exact
        path="/recipes/:id"
        render={props => <Recipe {...props} setViewLogin={setViewLogin} />}
      />
    </div>
  );
}

export default App;
