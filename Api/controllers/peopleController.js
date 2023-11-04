// const axios = require("axios");
import axios from "axios";
const URL = "https://swapi.dev/api";

export const getPeoples = async (req, res) => {
  try {
    const response = await axios.get(`${URL}/people/`);
    const peoples = response.data;
    res.json(peoples);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};

export const getPeople = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}/people/${id}/`);
    const people = response.data;
    res.json(people);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los datos de Star Wars." });
  }
};
