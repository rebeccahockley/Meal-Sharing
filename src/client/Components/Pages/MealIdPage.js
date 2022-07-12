import React from "react";
import { Header } from "../Body/Header";
import { Footer } from "../Body/Footer";
import { MealByID } from "../Body/MealByID";

export const MealIdPage = () => {
  return (
    <div>
      <Header />
      <MealByID />
      <Footer />
    </div>
  );
};
