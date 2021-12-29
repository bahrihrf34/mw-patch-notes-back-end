const mongoose = require("mongoose");

const patchNotesSchema = new mongoose.Schema(
  {
    title: String,
    detail: String,
    author: String,
    patchName: String,
    tagList: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PatchNotes", patchNotesSchema)