const express = require("express");
const router = express.Router();
const knex = require("../database");

router.post("/", async (request, response) => {
  try {
    const newMeal = await knex("Meal").insert(request.body);
    response.send(`Added new meal: ${newMeal}`);
  } catch (error) {
    response
      .status(400)
      .send("Cannot add meal, please check you have the correct format");
  }
});

router.get("/:id", async (request, response) => {
  try {
    const getMealByID = await knex("Meal").where(
      "ID",
      parseInt(request.params.id)
    );
    response.status(200).json(getMealByID);
  } catch (e) {
    response.status(400).send("Please input a valid ID");
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updateMealByID = await knex("Meal")
      .where("id", parseInt(request.params.id))
      .update(request.body);
    response.status(200).json(updateMealByID);
  } catch (e) {
    response
      .status(400)
      .send("Could not update meal, please check you have the correct ID");
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deleteMealByID = await knex("Meal")
      .where("id", parseInt(request.params.id))
      .del();
    response.status(200).json(deleteMealByID);
  } catch (e) {
    response
      .status(400)
      .send("Could not delete meal, please check you have the correct ID");
  }
});

router.get("/", async (request, response) => {
  let meals = knex("Meal");
  const { maxPrice, availableReservations, limit, createdAfter, title } =
    request.query;
  if (maxPrice) {
    meals = meals.where("Price", "<=", parseInt(maxPrice));
  }

  if (createdAfter) {
    meals = meals.where("Meal.Created_Date", ">", createdAfter);
  }

  if (availableReservations) {
    meals
      .join("Reservation", "Reservation.Meal_ID", "=", "Meal.ID")
      .where("Meal.Max_Reservations", ">", "No_Of_Guests");
  }

  if (title) {
    meals = meals.where("Meal.title", "like", `%${title}%`);
  }

  if (limit) {
    meals = meals.limit(parseInt(limit));
  }

  try {
    const selectedMeals = await meals;
    response.status(200).json(selectedMeals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
