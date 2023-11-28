const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const notes = [];

app.get("/", (req, res) => {
  res.json({ msg: "Home Page", success: true });
});

app.get("/profile", (req, res) => {
  res.json({ msg: "Profile not found", success: false });
});

app.post("/notes", async (req, res) => {
  const { note } = req.body;
  notes.push(note);
  res.json({ msg: "Note added", success: true });
});

app.get("/notes", (req, res) => {
  res.json({ msg: "Notes yo", success: true, notes: notes });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});
