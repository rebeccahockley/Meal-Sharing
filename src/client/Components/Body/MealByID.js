import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationForm } from "./ReservationForm";

export const MealByID = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMealIdData();
  }, []);
  function fetchMealIdData() {
    fetch(`api/meals/${params.mealId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data[0]);
      });
  }
  return (
    <div id="byIDContainer">
      <div>
        <h3>{data.Title}</h3>
        <p>{data.Description}</p>
        <p>Price: {data.Price}kr</p>
        <p>Location: {data.Location}</p>
      </div>
      <ReservationForm reservationID={params.mealId} />
    </div>
  );
};
