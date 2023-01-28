import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  }
}, {
  timestamps: true
})

export const User = model('user', UserSchema)

