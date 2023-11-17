const router = require('express').Router();


// Import our files containing our routes
const notesRouter = require('./notes');

// adds the notes router on to this router object
router.use('./notes', notesRouter);

// exports the router object to be used by api
module.exports = router;
