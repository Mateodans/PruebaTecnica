import express from "express";
const app = express();
const port = 3000;
import people from "./routers/people.js";
import starship from "./routers/starship.js";
import films from "./routers/film.js";

app.use("/people", people);
app.use("/starship", starship);
app.use("/film", films);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
