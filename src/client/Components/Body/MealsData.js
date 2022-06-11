import React, { useEffect, useState } from "react";
import { MealItem } from "./MealItem";
import "./Styling/MealsStyles.css";

export const MealsData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMealData();
  }, []);
  function fetchMealData() {
    fetch("http://localhost:5000/api/meals")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  return (
    <div id="mealContainer">
      {data.map((meal) => {
        return (
          <MealItem
            key={meal.ID}
            mealId={meal.ID}
            mealTitle={meal.Title}
            mealDescription={meal.Description}
            mealPrice={meal.Price}
            mealLocation={meal.Location}
          />
        );
      })}
    </div>
  );
};
