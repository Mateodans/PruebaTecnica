// const axios = require("axios");
import axios from "axios";
const URL = "https://swapi.dev/api";

export const getStarships = async (req, res) => {
  try {
    const response = await axios.get(`${URL}/starships/`);
    const starships = response.data;
    res.json(starships);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};

export const getStarship = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}/starships/${id}/`);
    const starship = response.data;
    res.json(starship);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};
