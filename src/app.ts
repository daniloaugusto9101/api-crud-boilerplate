import express from "express";
import { getUsers } from "./controllers/users-controller";

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/users", getUsers);

  return app;
}

export default createApp;
