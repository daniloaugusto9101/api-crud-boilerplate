import { findAllUsers } from "../repositories/users-repository";
import { ok, noContent } from "../utils/http-helper";

export const getUsersService = async () => {
  const data = await findAllUsers();

  let response = null;
  data ? (response = await ok(data)) : (response = await noContent());
  return response;
};
