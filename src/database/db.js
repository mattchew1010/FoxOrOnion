"use server"
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {v4 as uuidv4} from "uuid";
const prisma = new PrismaClient();
//####USERS####
export async function CreateUser(email, password, username) {
  return prisma.session.create({
    data: {
      uuid: uuidv4(),
      user: {
        create: {
          email: email,
          password: bcrypt.hashSync(password, 10),
          username: username,
          uuid: uuidv4(),
        }
      }
    },
  })
}

export async function userAuth(email, password) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (!user) {
    throw "User not found"
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    return prisma.session.create({
      data: {
        uuid: uuidv4(),
        user: {
          connect: {
            uuid: user.uuid,
          }
        }
      },
    })
  } else {
    throw "Invalid Password"
  }
}




//####ARTICLES####
export async function createArticle(url, title, realNews){
  if (realNews){
    return prisma.news.create({
      data: {
        url: url,
        title: title,
        uuid: uuidv4(),
      },
    })
  } else{
    return prisma.satire.create({
      data: {
        url: url,
        title: title,
        uuid: uuidv4(),
      },
    })
  }
}