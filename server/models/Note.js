
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NoteSchema =  new Schema({
    note: {
        type: String,
        max: 255,
        min: 6,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Note = mongoose.model('Note', NoteSchema)

export default Note