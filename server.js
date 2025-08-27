import { PORT } from "./env.js";

import express from "express";
const APP_PORT = parseInt(PORT) || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((request, response, next) => {
  console.log(`Time and Date: ${Date()}`);
  next();
});

app.get("/", (request, response) => {
  response.status(200).send("We Cooo");
});

app.listen(APP_PORT, () => {
  console.log(`Server's ears on port: ${APP_PORT}`);
});

export { app };
