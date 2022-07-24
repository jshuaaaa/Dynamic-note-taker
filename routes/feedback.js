const fb = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const { readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const { newNote } = require('../helpers/fsUtils');
const { notes } = require('../db/db.json')


// GET Route for retrieving all the feedback
fb.get('/', (req, res) =>
 res.json(notes)
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  req.body.id = uuid();

  const note = newNote(req.body, notes);
  res.json(note)
  //Calls new Note helper to create a new note based on the data given
});

fb.delete('/:id', (req, res) => {
  const { id } = req.params;

  const delNote = notes.findIndex(note => note.id ==id);

  notes.splice(delNote, 1);
  return res.send();
});




module.exports = fb;
