import prisma from "./prisma";
import { hash } from "argon2";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export async function createUser(
  email: string,
  name: string,
  password: string
) {
  try {
    const hashedPassword = await hash(password);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}

export const updateUser = async (
  id: string,
  email: string,
  name: string,
  password: string
) => {
  const hashedPassword = await hash(password);
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
