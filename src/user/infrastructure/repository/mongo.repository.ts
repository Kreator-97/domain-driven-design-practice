import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import { User } from '../models/User'

/**
 * Capa de infraestructura
 */

export class MongoRepository implements UserRepository {
  constructor() {}

  async findUserByName(name: string): Promise<any> {
    const user = await User.findOne({ name })

    if( !user ) return null

    return { email: user.email, description: user.description, name: user.name }
  }

  async registerUser(user: UserEntity): Promise<any> {
    const newUser = await User.create(user)
    return newUser
  }

  async getUsers(): Promise<any[]> {
    const users = await User.find()
    return users
  }
}
