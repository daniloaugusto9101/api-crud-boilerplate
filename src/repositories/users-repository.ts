import { UserModel } from "../models/users-model";

const database: UserModel[] = [
  { id: 1, name: "John2" },
  { id: 2, name: "Jane" },
];

export const findAllUsers = async (): Promise<UserModel[]> => {
  return database;
};
