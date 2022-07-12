import React from "react";
import { Header } from "../Body/Header";
import { HomeMealData } from "../Body/HomeData";
import { Footer } from "../Body/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <HomeMealData />
      <Footer />
    </div>
  );
};
