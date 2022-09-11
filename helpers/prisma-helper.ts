import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

interface CreateUser {
  name: string;
  email: string;
}

export async function createUser(req_body: CreateUser) {
  //   console.log("from helper createUser, req.body:", body);
  const user = await prisma.user.create({
    data: {
      name: req_body.name,
      email: req_body.email,
    },
  });

  return user;
}

interface DeleteUser {
  id: number;
}
export async function deleteUser(req_body: DeleteUser) {
  const idString = req_body.id.toString();
  const id: number = parseInt(idString);
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
}
