import mongoose, { connect } from 'mongoose'
mongoose.set('strictQuery', false)

const MONGO_STRING_CONNECTION = process.env.MONGO_STRING_CONNECTION

export const dbConnection = async () => {
  if( !MONGO_STRING_CONNECTION ) {
    throw new Error('Mongo string connection URI is invalid')
  }

  try {
    await connect(MONGO_STRING_CONNECTION)
    console.log('Database online')
  } catch (error) {
    console.error(error)
  }
}