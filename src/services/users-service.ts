import { HttpResponse } from "../models/http-response-model";
import { UserModel } from "../models/users-model";
import * as UsersRepository from "../repositories/users-repository";
import { ok, noContent } from "../utils/http-helper";

export const getUsers = async (): Promise<HttpResponse> => {
  const data: UserModel[] | [] = await UsersRepository.findAllUsers();
  let response = null;
  data.length > 0 ? (response = await ok(data)) : (response = await noContent());
  return response;
};

export const getUserByEmail = async (email: string): Promise<HttpResponse> => {
  const data: UserModel[] | [] = await UsersRepository.findUsersByEmail(email);
  let response = null;
  data.length > 0 ? (response = await ok(data)) : (response = await noContent());
  return response;
};

// export const postUser = async (body: UserModel): Promise<HttpResponse> => {
//   const data = await UsersRepository.insertUser(body);
//   let response = null;
//   data.length > 0 ? (response = await ok(data)) : (response = await noContent());
//   return response;
// };
