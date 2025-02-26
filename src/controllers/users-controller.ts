import { Request, Response } from "express";
import * as UsersService from "../services/users-service";
import { HttpResponse } from "../models/http-response-model";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const httpResponse: HttpResponse = await UsersService.getUsers();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.params;
  const httpResponse: HttpResponse = await UsersService.getUserByEmail(email);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

// export const postUser = async (req: Request, res: Response): Promise<void> => {
//   const body = req.body;
//   const httpResponse: HttpResponse = await UsersService.postUser(body);

//   res.status(httpResponse.statusCode).json(httpResponse.body);
// };
