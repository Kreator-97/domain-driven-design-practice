import express from 'express'
import cors from 'cors'

import 'dotenv/config'
import { userRouter } from './routes/user.routes'
import { dbConnection } from './database/dbConnection'


const main = async () => {

  const app = express()
  

 await dbConnection()

  app.use(cors())
  app.use(express.json())

  const port = process.env.PORT || 3001

  app.use('/api/user', userRouter)

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}

main()
