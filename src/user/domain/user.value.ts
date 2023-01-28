import { v4 as uuid } from 'uuid'
import { UserEntity } from './user.entity'

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  email: string;
  description: string;

  constructor(name: string, email: string, description: string ) {
    this.name = name
    this.email = email
    this.description = description
    this.uuid = uuid()
  }
}