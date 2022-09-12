import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany();
  console.log("from prisma helper, getUsers, users:", users);
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

interface DeleteUsers {
  selectedUsers: number[];
}
export async function deleteUsers(req_body: DeleteUsers) {
  const userIdsStrings = req_body.selectedUsers;
  //console.log("from prisma helper user ids", userIds);
  const userIds = userIdsStrings.map((str) => {
    return Number(str);
  });

  const deletedUser = await prisma.user.deleteMany({
    where: {
      id: { in: userIds },
    },
  });

  // const deletedUsers = userIds.map((id) => {
  //   const deletedUser = deleteUser(id);
  //   return deletedUser;
  // });

  return deletedUser;
}
