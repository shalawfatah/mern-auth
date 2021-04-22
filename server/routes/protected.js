import { User } from "../models/User.js"
import express from 'express'
const router = express.Router()
import {authorization} from '../middleware/verifyToken.js'

router.get('/protected', authorization, async (req, res)=> {
    const user = req.user
    const foundUser = await User.findOne({_id: user._id})
    res.send({'name': foundUser.name, 'email': foundUser.email})
})

export default router