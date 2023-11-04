import express from "express";
const films = express.Router();
import { getFilm, getFilms } from "../controllers/filmsController.js";
films.get("/", getFilms);
films.get("/:id", getFilm);

export default films;
