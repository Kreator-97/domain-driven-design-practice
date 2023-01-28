import { Router } from 'express'
import { createUser, getUser } from '../controllers'

export const userRouter = Router()

userRouter.get('/:name', getUser )
userRouter.post('/', createUser )
