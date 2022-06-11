import React, { useState } from "react";

export const ReservationForm = ({ reservationID }) => {
  const [userValues, setUserValues] = useState({
    ContactName: "",
    ContactPhoneNumber: "",
    ContactEmail: "",
  });

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserValues({ ...userValues, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userValues.ContactName != "" && userValues.ContactEmail != "") {
      try {
        const response = await fetch(
          "https://localhost:5000/api/reservations",
          {
            method: "POST",
            body: JSON.stringify({
              Meal_ID: reservationID,
              Contact_Name: userValues.ContactName,
              Contact_PhoneNumber: userValues.ContactPhoneNumber,
              Contact_Email: userValues.ContactEmail,
              No_Of_Guests: 1,
              // Created_Date: new Date().toISOString(),
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.status === 200) {
          alert("Your seat is booked! Enjoy!");
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
      <div id="reservationForm">
        <label>
          <p>Name:</p>
          <input
            type="text"
            name="ContactName"
            required
            onChange={handleInput}
          ></input>
        </label>
        <label>
          <p>Phone Number:</p>
          <input
            type="text"
            name="ContactPhoneNumber"
            onChange={handleInput}
          ></input>
        </label>
        <label>
          <p>Email:</p>
          <input
            type="text"
            name="ContactEmail"
            required
            onChange={handleInput}
          ></input>
        </label>
        <span>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </span>
      </div>
    </form>
  );
};
