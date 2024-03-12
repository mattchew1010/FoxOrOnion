"use server"
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {v4 as uuidv4} from "uuid";
const prisma = new PrismaClient();

export async function CreateUser(email, password, username) {
  return prisma.user.create({
    data: {
      email: email,
      password: await bcrypt.hashSync(password, 10),
      username: username,
      uuid: uuidv4(),
    },
  })
}