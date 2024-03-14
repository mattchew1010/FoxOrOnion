"use server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import {v4 as uuidv4} from "uuid"
import prismaRandom from 'prisma-extension-random'
const prisma = new PrismaClient().$extends(prismaRandom())


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

export async function getUserFromSession(sessionid) {
  const session = await prisma.session.findUnique({
    where: {
      uuid: sessionid,
    },
    include: {
      user: true,
    }
  })
  return session.user
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


//####GAMES####

export async function getRandomRound(userId){
  //todo: make sure random round has not been played by user
  //todo: make news and satire in ONE table... idk what i was thinking
  if (Math.random() > 0.5){
    return prisma.news.findRandom({
      select: {
        uuid: true,
        title: true,
      }
    })
  }else {
    return prisma.satire.findRandom({
      select: {
        uuid: true,
        title: true,
      }
    })
  }
}

export async function setUserRound(userId, article, choice){
  //if choice is true, article is news
  //todo: see getRandomRound todos will make this much cleaner
  var data = {
    data: {
      uuid: uuidv4(),
      user: {
        connect: {
          uuid: userId,
        }
      }
    }
  }
  const news = await prisma.news.findUnique({
    where: {
      uuid: article,
    }
  })
  if (news){
    data.data.news = {
      connect: {
        uuid: article,
      },
    }
    data.data.correct = choice
  } else{
    data.data.satire = {
      connect: {
        uuid: article,
      },
    }
    data.data.correct = !choice
  }
  return prisma.round.create(data)
}