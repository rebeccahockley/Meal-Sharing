import React from "react";
import { Link } from "react-router-dom";

export const MealItem = (props) => {
  return (
    <div>
      <h3>{props.mealTitle} </h3>
      <p>{props.mealDescription}</p>
      <p>Price: {props.mealPrice}kr</p>
      <p>Location: {props.mealLocation}</p>
      <Link to={`/meals/${props.mealId}`}>
        <button>Book Meal</button>
      </Link>
    </div>
  );
};
