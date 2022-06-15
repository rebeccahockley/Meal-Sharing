import React, { useEffect, useState } from "react";
import { ReviewItem } from "./ReviewItem";
import "./Styling/ReviewStyles.css";

export const ReviewData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchReviewData();
  }, []);

  function fetchReviewData() {
    fetch("api/reviews")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="reviewContainer">
      {data.map((review) => {
        return (
          <ReviewItem
            key={review.ID}
            reviewTitle={review.Title}
            reviewDescription={review.Description}
          />
        );
      })}
    </div>
  );
};
