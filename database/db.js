import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MONGODB_URL=process.env.MONGODB_URL

export async function connect(){
  try {

    await mongoose.connect(MONGODB_URL)
    console.log("connected MongoDB")
  } catch (error) {
    console.error(error)
  }
}
