import express from "express";
import routerV1 from "./routes/routesV1";

function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api/v1.0", routerV1);

  return app;
}

export default createApp;
