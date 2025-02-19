import { UserModel } from "../models/users-model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllUsers = async (): Promise<UserModel[]> => {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
};
