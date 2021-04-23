import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import {dbconnection} from './config/db.js'
import userRegister from './routes/auth.js'
const app = express()
import protectedRoute from './routes/protected.js'
import NoteRoutes from './routes/note.js'

app.use(cors())
app.use(express.json())

app.use('/', protectedRoute)
app.use('/', NoteRoutes)

dbconnection()


app.use('/', userRegister)

app.listen(process.env.PORT, () => {
    console.log('App is running on port ' + process.env.PORT)
})