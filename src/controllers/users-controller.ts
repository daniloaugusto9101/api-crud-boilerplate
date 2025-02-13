import { Request, Response } from "express";
import { getUsersService } from "../services/users-service";
import { ok } from "../utils/http-helper";

export const getUsers = async (req: Request, res: Response) => {
  const data = await getUsersService();
  const response = await ok(data);
  res.status(response.statusCode).json(response.body);
};
