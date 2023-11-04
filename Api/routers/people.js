import express from "express";
const people = express.Router();
import { getPeople, getPeoples } from "../controllers/peopleController.js";
people.get("/", getPeoples);
people.get("/:id", getPeople);

export default people;
