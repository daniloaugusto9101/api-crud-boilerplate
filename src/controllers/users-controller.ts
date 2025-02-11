import { Request, Response } from "express";
import { getUsersService } from "../services/users-service";

export const getUsers = async (req: Request, res: Response) => {
  const data = await getUsersService();
  res.status(200).json(data);
};
