import React from "react";

export const HomeItem = (props) => {
  return (
    <div>
      <h3>{props.mealTitle}</h3>
      <p>{props.mealDescription}</p>
    </div>
  );
};
