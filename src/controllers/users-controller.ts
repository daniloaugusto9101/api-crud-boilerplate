import { Request, Response } from "express";
import { getUsersService } from "../services/users-service";

export const getUsers = async (req: Request, res: Response) => {
  const httpResponse = await getUsersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
