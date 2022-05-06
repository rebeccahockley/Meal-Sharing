const express = require("express");
const router = express.Router();
const knex = require("../database");

router.post("/", async (request, response) => {
  try {
    const newReservation = await knex("Reservation").insert(request.body);
    response.send(`Added new reservation: ${newReservation}`);
  } catch (error) {
    response
      .status(400)
      .send("Cannot add reservation, please check you have the correct format");
  }
});

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("Reservation").select("*");
    response.json(reservations);
  } catch (error) {
    response.status(400).send("Cannot get all reservations");
  }
});

router.get("/:id", async (request, response) => {
  try {
    const getReservationByID = await knex("Reservation").where(
      "ID",
      parseInt(request.params.id)
    );
    response.status(200).json(getReservationByID);
  } catch {
    response.status(400).send("Please input a valid ID");
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updateReservationByID = await knex("Reservation")
      .where("id", parseInt(request.params.id))
      .update(request.body);
    response.status(200).json(updateReservationByID);
  } catch {
    response
      .status(400)
      .send(
        "Could not update reservation, please check you have the correct ID"
      );
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deleteReservationByID = await knex("Reservation")
      .where("id", parseInt(request.params.id))
      .del();
    response.status(200).json(deleteReservationByID);
  } catch {
    response
      .status(400)
      .send(
        "Could not delete reservation, please check you have the correct ID"
      );
  }
});

module.exports = router;
