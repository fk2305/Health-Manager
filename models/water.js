const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema(
  {
    waterIntake: {
      type: Number,
      trim: true,
      required: true,
    },
  
    
  },
  {
    timestamps: true,
  }
);

const waterLog = mongoose.model('Water', waterSchema);

module.exports = waterLog;
