import { CreateUserDTO, User } from "../models/users-model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Resgata todos os usuários
export const findAllUsers = async (): Promise<User[]> => {
  const users: User[] | [] = await prisma.user.findMany();
  prisma.$disconnect();
  return users;
};

//Resgata usuário específico
export const findUsersByEmail = async (email: string): Promise<User[]> => {
  const users: User[] | [] = await prisma.user.findMany({
    where: {
      email,
    },
  });
  prisma.$disconnect();
  return users;
};

//Inserre um usuário
export const insertUser = async (body: CreateUserDTO): Promise<User> => {
  const user: User = await prisma.user.create({
    data: body,
  });
  prisma.$disconnect();
  return user;
};

//Deleta um usuário
export const deleteUser = async (email: string): Promise<User> => {
  const user: User = await prisma.user.delete({
    where: {
      email,
    },
  });
  prisma.$disconnect();
  return user;
};

//Atualiza um usuário
export const updateUser = async (email: string, body: Partial<CreateUserDTO>): Promise<User> => {
  const user: User = await prisma.user.update({
    where: {
      email,
    },
    data: {
      ...body,
    },
  });
  prisma.$disconnect();
  return user;
};
