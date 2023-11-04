// const axios = require("axios");
import axios from "axios";
const URL = "https://swapi.dev/api";

export const getFilms = async (req, res) => {
  try {
    const response = await axios.get(`${URL}/films/`);
    const films = response.data;
    res.json(films);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};

export const getFilm = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}/films/${id}/`);
    const film = response.data;
    res.json(film);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};
