import { User } from '../models/User'
import { User as UserInterface } from '../interfaces/user'

/**
 * Registrar usuario
 * @param user 
 * @returns 
 */

const registerUser = async (user: UserInterface) => {
  const res = await User.create(user)
  return res
}

/**
 * Obtener información del usuario
 * @param email
 * @returns 
 */

const getDetailUser = async(name: string) => {
  const res = await User.findOne({name})
  return res
}

export { registerUser, getDetailUser }