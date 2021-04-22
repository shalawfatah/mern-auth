import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import {dbconnection} from './config/db.js'
import userRegister from './routes/auth.js'
import {authorization} from './middleware/verifyToken.js'
const app = express()

app.use(express.json())
app.use(cors())

dbconnection()

app.get('/', authorization, (req, res)=> {
    res.send('Hello World!')
})
app.use('/', userRegister)

app.listen(process.env.PORT, () => {
    console.log('App is running on port ' + process.env.PORT)
})