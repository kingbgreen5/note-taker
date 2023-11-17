const express = require('express');
const path = require("path")
const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//           ROUTER
const api = require('./routes/index');  // brings in the router index file and sets to api
app.use('/api', api);           // requests that begin with /api --> index.js in the routes folder



// makes everything in the public folder static and Public becomes the front end. 
// public becomes the base level or ROOT
app.use(express.static(path.join(__dirname,'public')));


// This view route is a GET route for the homepage
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// This view route is a GET route for the notes page
// sends you to notes.html when the button is clicked that performs get request
app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname,'public', 'notes.html'))
});





// // This works! so something is wrong with the pathing to the notes file

// // Helper functions for reading and writing to the JSON file
// const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

// const db =require('./db/db.json')

// app.get('/api/notes', (req, res) => {
//   console.info(`${req.method} request received for notes`);
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });








app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
