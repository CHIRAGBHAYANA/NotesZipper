const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 5000;

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
