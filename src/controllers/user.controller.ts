import { Request, Response } from 'express'
import { registerUser, getDetailUser } from '../services'

export const getUser = async (req: Request, res: Response) => {
  const { name } = req.params
  
  const user = await getDetailUser(name)

  if( !user ) {
    return res.status(404).json({
      msg: `No existe el usuario con el correo ${name}`
    })
  }

  return res.status(200).json({
    msg: 'ok',
    user,
  })
}

export const createUser = async (req: Request, res: Response) => {
  const { name, email, description } = req.body

  const required = [name, email, description]

  if( required.some( value => !value) ) {
    return res.status(400).json({
      msg: 'Las propiedades name, email description son obligatorios en req.body',
      sent: { name, email, description }
    })
  }

  const result = await registerUser( { description, email, name } )

  return res.status(200).json({
    msg: 'ok',
    result,
  })
}
