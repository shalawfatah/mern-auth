import { User } from "../models/User.js"
import {registerSchema} from '../validations/registerValidation.js'
import bcrypt from 'bcryptjs'

export const userRegister = async (req, res) => {
    const {name, email, password} = req.body
    const found = await User.findOne({email})
    if(found) return res.send('User already registered!')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const {error} = await registerSchema.validate({name, email, password})
        if(error) return res.status(400).send(error.details[0].message)
        const newUser = await new User({name, email, password: hashedPassword})
        await newUser.save()
        res.json({"user": newUser._id})
    } catch (error) {
        console.log(error)
    }
}
