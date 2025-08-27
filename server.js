import { PORT } from "./env.js";

import express from "express";
const APP_PORT = parseInt(PORT) || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});

app.listen(APP_PORT, () => {
  console.log(`Server's ears on port: ${APP_PORT}`);
});

export { app };
