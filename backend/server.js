const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv')

const app = express();

app.use(express.json());

// Set up the routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
