const notes = require('express').Router();
const uuid = require('../helpers/uuid');  // generates random number for id
// const db = require('../db/db.json')

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// This API route is a GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This API route is a POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);

 
    const { title, text, } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
  

    readAndAppend(newNote, './db/db.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;


// const handleNoteSave = () => {
//   const newNote = {
//     title: noteTitle.value,
//     text: noteText.value
//   };
//   saveNote(newNote).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

