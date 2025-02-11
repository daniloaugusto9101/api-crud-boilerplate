import express, { json, Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    player: "Neymar",
  });
});

app.listen(port, () => {
  console.log(`🔥Server is running on port http://localhost:${port}`);
});
