const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
  {
    goalType: {
      type: String,
      trim: true,
      required: true,
    },
    goalValue: {
      type:String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const goalLog = mongoose.model('Goal', goalSchema);

module.exports = goalLog;
