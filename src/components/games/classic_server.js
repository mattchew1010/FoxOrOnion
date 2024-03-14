"use server"
import {getRandomRound, setUserRound} from "@/database/db.js"

export async function getRound(userId) {
   try {
      var round = await getRandomRound(userId)
      return {success: true, article: round}
   } catch (error) {
      console.log(error)
      return {success: false}
   }
}

export async function submitClassicAnswer(userId, articleUUID, choice) {
   try {
      const round = await setUserRound(userId, articleUUID, choice)//todo: better name for this
      const nextRound = await getRandomRound(userId)
      return {success: true, round: round, article: nextRound}
   } catch (error) {
      console.log(error)
      return {success: false}
   } 
}