const notes = require('express').Router();
const uuid = require('../helpers/uuid');  // generates random number for id
const db = require('../db/db.json')

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// This API route is a GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This API route is a POST Route for a new note
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
    const { title, text, } = req.body;
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };

    readAndAppend(newNote, './db/db.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});



// const noteId = require('../public/assets/js')
notes.delete('/:id',(req, res) => {

  console.info(`${req.method} request received to delete a note`);
  console.log("Note Delete button clicked")
  console.log(req.params.id)    // this is the id for the clicked item!!!!!!
  // params: { id: '3fa8' },

requestedID = req.params.id

  // Iterate through the terms name to check if it matches `req.params.term`
 for (let i = 0; i < db.length; i++) {
   if (requestedID === db[i].id) {
    console.log(db[i]);
    noteToBeDeleted= db[i]
 }
  }
})


// // GET route that returns any specific term
// // :term is the paramater that is being looked for. The : identifies it as a parameter

// app.delete('/:note_id', (req, res) => {

//   // Coerce the specific search term to lowercase

//   const requestedTerm = req.params.note_id.toLowerCase();

//   // Iterate through the terms name to check if it matches `req.params.term`
//   for (let i = 0; i < termData.length; i++) {
//     if (requestedTerm === termData[i].term.toLowerCase()) {
//       return res.json(termData[i]);
//     }
//   }

//   // Return a message if the term doesn't exist in our DB
//   return res.json('No match found');
// });


// // Fallback route for when a user attempts to visit routes that don't exist
// app.get('*', (req, res) =>
//   res.send(
//     `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
//   )
// );











































module.exports = notes;
