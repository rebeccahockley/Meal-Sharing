import React, { useEffect, useState } from "react";
import { HomeItem } from "./HomeItem";

export const HomeMealData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHomeMealData();
  }, []);
  function fetchHomeMealData() {
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
    <div id="renderHomePage">
      {data.map((homeMeal) => {
        return (
          <HomeItem
            key={homeMeal.ID}
            mealId={homeMeal.ID}
            mealTitle={homeMeal.Title}
            mealDescription={homeMeal.Description}
          />
        );
      })}
    </div>
  );
};
