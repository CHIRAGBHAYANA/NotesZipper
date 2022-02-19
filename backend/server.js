const express = require("express");
// const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.json(note);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
