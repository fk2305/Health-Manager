const reminder= require('../models/reminder');

let healthReminders = {
    reminders: [],
};

module.exports.getReminder = async function (req, res) {
    try {
        let healthReminders = await reminder.find({}).sort('-createdAt');
        res.render('health-reminder', { healthReminders });
    } catch {
      console.log('Error', err);
      return;
    }
  };


  module.exports.setReminder = async function (req, res) {
    try {
       
        reminder.create({
          reminderText: req.body.reminderText,
          reminderTime: req.body.reminderTime,
          
        });

    
        res.redirect('/health-reminder');
    } catch {
      console.log('Error', err);
      return;
    }
  };  