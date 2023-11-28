import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  note: String,
});

const NotesModel = mongoose.model("notes", NotesSchema);

export default NotesModel;
