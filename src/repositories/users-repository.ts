import { CreateUserDTO, UserModel } from "../models/users-model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Resgata todos os usuários
export const findAllUsers = async (): Promise<UserModel[]> => {
  const users: UserModel[] | [] = await prisma.user.findMany();
  prisma.$disconnect();
  return users;
};

//Resgata usuário específico
export const findUsersByEmail = async (email: string): Promise<UserModel[]> => {
  const users: UserModel[] | [] = await prisma.user.findMany({
    where: {
      email,
    },
  });
  prisma.$disconnect();
  return users;
};

export const insertUser = async (body: CreateUserDTO): Promise<UserModel> => {
  const user: UserModel = await prisma.user.create({
    data: body,
  });
  prisma.$disconnect();
  return user;
};

//Deleta um usuário
export const deleteUser = async (email: string): Promise<UserModel> => {
  const user: UserModel = await prisma.user.delete({
    where: {
      email,
    },
  });
  prisma.$disconnect();
  return user;
};

//Atualiza um usuário
// export const updateUser()
