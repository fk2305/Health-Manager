const mongoose = require('mongoose');

const excerciseSchema = new mongoose.Schema(
  {
    exerciseName: {
      type: String,
      trim: true,
      required: true,
    },
    duration: {
      type:Number,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Excercise = mongoose.model('Excercise', excerciseSchema);

module.exports = Excercise;
