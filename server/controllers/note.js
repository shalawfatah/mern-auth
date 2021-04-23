import mongoose from 'mongoose'
import Note from '../models/Note.js'

export const getAllNotes = async (req, res) => {
    res.send('All Notes')
}

export const getOneNote = async (req, res) => {
    res.sent('One Note')
}

export const createNote = async (req, res) => {
    res.send('Note')
}

export const deleteNote = async (req, res) => {
    res.send('Note')
}

export const updateNote = async (req, res) => {
    res.send('Note')
}