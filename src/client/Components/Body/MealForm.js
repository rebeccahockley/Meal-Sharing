import React, { useState } from "react";
import "./Styling/MealFormStyling.css";

export const MealForm = () => {
  const [mealValues, setMealValues] = useState({
    Title: "",
    Description: "",
    Location: "",
    When: "",
    MaxReservations: "",
    Price: "",
  });

  const handleMealInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setMealValues({ ...mealValues, [key]: value });
  };

  const handleMealSubmit = async (e) => {
    e.preventDefault();

    if (
      mealValues.Title != "" &&
      mealValues.Location != "" &&
      mealValues.When != "" &&
      mealValues.MaxReservations != "" &&
      mealValues.Price != ""
    ) {
      try {
        const response = await fetch("./api/meals", {
          method: "POST",
          body: JSON.stringify({
            Title: mealValues.Title,
            Description: mealValues.Description,
            Location: mealValues.Location,
            When: mealValues.When,
            Max_Reservations: mealValues.MaxReservations,
            Price: mealValues.Price,
          }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          alert("Your meal is uploaded! Enjoy cooking!");
          return response;
        } else {
          alert("Something went wrong. Please try again");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter the required fields");
    }
  };

  return (
    <form>
      <div id="mealForm">
        <h3>Add a new meal</h3>
        <label>
          <p>Title:*</p>
          <input
            type="text"
            name="Title"
            required
            onChange={handleMealInput}
          ></input>
        </label>
        <label>
          <p>Description:</p>
          <input
            type="text"
            name="Description"
            onChange={handleMealInput}
          ></input>
        </label>
        <label>
          <p>Location:*</p>
          <input
            type="text"
            name="Location"
            required
            onChange={handleMealInput}
          ></input>
        </label>
        <label>
          <p>When:*</p>
          <input
            type="datetime-local"
            name="When"
            required
            onChange={handleMealInput}
          ></input>
        </label>
        <label>
          <p>Max. Reservations:*</p>
          <input
            type="number"
            name="MaxReservations"
            required
            onChange={handleMealInput}
          ></input>
        </label>
        <label>
          <p>Price:*</p>
          <input
            type="text"
            name="Price"
            required
            onChange={handleMealInput}
          ></input>
        </label>
        <br />
        <button id="submitButton" type="submit" onClick={handleMealSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
