import { noContent, ok } from "../utils/http-helper";

export const getUsersService = async () => {
  const data = {
    player: "Ronaldo Nazário",
  };

  let response = null;
  data ? (response = await ok(data)) : (response = await noContent());
  return response;
};
