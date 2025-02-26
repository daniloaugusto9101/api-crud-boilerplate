import { UserModel } from "../models/users-model";
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

//Criar um usuário
// export const insertUser = async (body: UserModel): Promise<UserModel> => {
//   const user = await prisma.user.create({
//     data: body, // Insere os dados do usuário no banco
//   });

//   return user;
// };

//Deleta um usuário
// export const deleteUser()

//Atualiza um usuário
// export const updateUser()
