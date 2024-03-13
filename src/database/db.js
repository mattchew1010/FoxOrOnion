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
          password: await bcrypt.hashSync(password, 10),
          username: username,
          uuid: uuidv4(),
        }
      }
    },
  })
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