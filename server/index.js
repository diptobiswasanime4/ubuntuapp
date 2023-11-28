import express from "express";
import mongoose from "mongoose";
import NotesModel from "./models/Notes.js";

const app = express();

app.use(express.json());

const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://diptobiswas:abcd1234@userauth.7j6rjy4.mongodb.net/ubuntuapp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  });

app.get("/", (req, res) => {
  res.json({ msg: "Home Page", success: true });
});

app.get("/profile", (req, res) => {
  res.json({ msg: "Profile not found", success: false });
});

app.post("/notes", async (req, res) => {
  const { note } = req.body;
  const NotesDoc = new NotesModel({
    note: note,
  });
  const savedNote = await NotesDoc.save();
  res.json({ msg: "Note added", success: true, note: savedNote });
});

app.get("/notes", async (req, res) => {
  const notes = await NotesModel.find({});
  res.json({ msg: "Notes", success: true, notes: notes });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});
