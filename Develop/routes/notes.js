const notes = require('express').Router();
const uuid = require('../helpers/uuid');  // generates random number for id
const db = require('../db/db.json')
const fs = require('fs'); 

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');



//              This API route is a GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});



//              This API route is a POST Route for a new note
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



//  //        Logic works to identify object to be Deleted but actual deletion remains unfinished.
// notes.delete('/:id',(req, res) => {

//   console.info(`${req.method} request received to delete a note. Refresh page to see deletion`);
//   // console.log("Note Delete button clicked")
//   console.log(req.params.id)    // this is the id for the clicked item

// requestedID = req.params.id
// //             Iterate through the IDS to check if it matches `req.params.term` which is the clicked id
//  for (let i = 0; i < db.length; i++) {
//    if (requestedID === db[i].id) {

// console.log('Object to be deleted');
//     console.log(db[i])
//                                           does the actual deleting and rewriting
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         const parsedData = JSON.parse(data);
//         parsedData.splice(i,1);
//         writeToFile('./db/db.json', parsedData);
//       }
//     })

//    }}
//   }
// )





































module.exports = notes;
