const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const {notes }= require('./db/db.json')

const PORT = 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.delete('api/notes/:id', (req, res) => {
  const { id } = req.params;
  

  const newNotes = {
    title,
    text,
    id: req.params
  };

  readAndAppend(newNotes, './db/db.json');

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
