import React from "react";

export const ReviewItem = (props) => {
  return (
    <div>
      <h3>{props.reviewTitle} </h3>
      <p>"{props.reviewDescription}"</p>
    </div>
  );
};
