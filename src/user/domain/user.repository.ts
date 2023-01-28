import { UserEntity } from "./user.entity"

export interface UserRepository {
  findUserByName(name:string):Promise<UserEntity | null>
  registerUser(user: UserEntity):Promise<UserEntity | null>
  getUsers():Promise<UserEntity[]>
}