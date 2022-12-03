const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const F1Schema = new Schema({
  driver: {
    firstname: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  season: {
    type: Number,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  champion: {
    type: Boolean,
    required: true,
  },
});

const FormulaOne = mongoose.model("FormulaOne", F1Schema);
module.exports = { FormulaOne };
