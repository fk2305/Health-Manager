const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema(
  {
    reminderText: {
      type: String,
      trim: true,
      required: true,
    },
    reminderTime: {
      type:String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
