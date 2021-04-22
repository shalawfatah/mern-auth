import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema =  new Schema({
    name: {
        type: String,
        max: 255,
        min: 6,
        required: true
    },
    email: {
        type: String,
        max: 255,
        min: 6,
        required: true,
        unique: true
    },
    password: {
        type: String,
        max: 1024,
        min: 5,
    }
})

export const User = mongoose.model('User', UserSchema)