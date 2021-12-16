import React, { useState } from "react";
import "./app.scss";
import HomePage from "./components/HomePage.js";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import PrivateRoute from "./components/PrivateRoute.js";
import DashBoard from "./components/DashBoard.js";
import AddRecipes from "./components/AddRecipes.js";
import UpdateRecipe from "./components/UpdateRecipe";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer.js";

function App() {
  const [viewLogin, setViewLogin] = useState(false);
  const [viewSignUp, setViewSignUp] = useState(false);

  return (
    <div className="App">
      <Route
        path="/"
        render={(props) => (
          <Header
            setViewLogin={setViewLogin}
            setViewSignUp={setViewSignUp}
            viewLogin={viewLogin}
            viewSignUp={viewSignUp}
            {...props}
          />
        )}
      />
      <PrivateRoute path="/">
        <Route
          exact
          path="/user"
          render={(props) => (
            <DashBoard {...props} setViewLogin={setViewLogin} />
          )}
        />
        <Route
          path="/user/:id/create-recipe"
          render={(props) => <AddRecipes {...props} />}
        />
      </PrivateRoute>

      <Route
        exact
        path="/"
        render={(props) => (
          <HomePage
            setViewLogin={setViewLogin}
            setViewSignUp={setViewSignUp}
            viewLogin={viewLogin}
            viewSignUp={viewSignUp}
            {...props}
          />
        )}
      />
      <Route
        path="/"
        render={(props) => (
          <Login {...props} setViewLogin={setViewLogin} viewLogin={viewLogin} />
        )}
      />
      <Route
        path="/"
        render={(props) => (
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
        render={(props) => <UpdateRecipe {...props} />}
      />

      <Route
        exact
        path="/recipes/:id"
        render={(props) => <Recipe {...props} setViewLogin={setViewLogin} />}
      />
      <Route path="/" render={(props) => <Footer {...props} />} />
    </div>
  );
}

export default App;
