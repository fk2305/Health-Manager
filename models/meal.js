const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema(
  {
    mealType: {
      type: String,
      trim: true,
      required: true,
    },
    calories: {
      type:Number,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const mealLog = mongoose.model('Meal', mealSchema);

module.exports = mealLog;
