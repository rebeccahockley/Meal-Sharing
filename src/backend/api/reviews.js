const express = require("express");
const router = express.Router();
const knex = require("../database");

router.post("/", async (request, response) => {
  try {
    const newReview = await knex("Review").insert(request.body);
    response.send(`Added new review: ${newReview}`);
  } catch (e) {
    response
      .status(400)
      .send("Cannot add review, please check you have the correct format");
  }
});

router.get("/", async (request, response) => {
  try {
    const reviews = await knex("Review").select("*");
    response.json(reviews);
  } catch (e) {
    response.status(400).send("Cannot get all reviews");
  }
});

router.get("/:id", async (request, response) => {
  try {
    const getReviewByID = await knex("Review").where(
      "ID",
      parseInt(request.params.id)
    );
    response.status(200).json(getReviewByID);
  } catch (e) {
    response.status(400).send("Please input a valid ID");
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updateReviewByID = await knex("Review")
      .where("id", parseInt(request.params.id))
      .update(request.body);
    response.status(200).json(updateReviewByID);
  } catch (e) {
    response
      .status(400)
      .send("Could not update review, please check you have the correct ID");
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deleteReviewByID = await knex("Review")
      .where("id", parseInt(request.params.id))
      .del();
    response.status(200).json(deleteReviewByID);
  } catch (e) {
    response
      .status(400)
      .send("Could not delete review, please check you have the correct ID");
  }
});

module.exports = router;
