// const express = require("express");
import express from "express";
const starship = express.Router();
import {
  getStarship,
  getStarships,
} from "../controllers/starshipController.js";
starship.get("/", getStarships);
starship.get("/:id", getStarship);

export default starship;
