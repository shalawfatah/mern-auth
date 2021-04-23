
import express from 'express'
import { createNote, deleteNote, getAllNotes, getOneNote, updateNote } from '../controllers/note.js'

const router = express.Router()

// GET ALL NOTES
router.get('/note', getAllNotes)

// GET ONE NOTE
router.get('/note:id', getOneNote)

// CREATE NOTE
router.post('/note', createNote)

// DELETE NOTE
router.delete('/note/:id', deleteNote)

// UPDATE NOTE
router.patch('/note/:id', updateNote)

export default router
