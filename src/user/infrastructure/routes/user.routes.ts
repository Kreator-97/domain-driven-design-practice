import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controllers/user.controller'
import { MongoRepository } from '../repository/mongo.repository'

export const userRouter = Router()

/**
 * iniciar repository
 */
const mongoRepository = new MongoRepository()


/**
 * Iniciar caso de uso
 */
const userUseCase = new UserUseCase(mongoRepository)


/**
 * Iniciar User controller
 */
const userCtrl = new UserController(userUseCase)

/**
 * 
 */
userRouter.post('/', userCtrl.insertCtrl)
userRouter.get('/:name', userCtrl.getCtrl)
