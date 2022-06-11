import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Pages/Home";
import { Reviews } from "./Components/Pages/Reviews";
import { Meals } from "./Components/Pages/Meals";
import { MealIdPage } from "./Components/Pages/MealIdPage";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/reviews">
        <Reviews />
      </Route>
      <Route exact path="/meals">
        <Meals />
      </Route>
      <Route exact path="/meals/:mealId">
        <MealIdPage />
      </Route>
    </Router>
  );
}

export default App;
