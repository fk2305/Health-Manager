const Excercise=require('../models/excercise');
const mealLog=require('../models/meal');
const waterLog=require('../models/water');
const goalLog=require('../models/goals');





module.exports.planner = async function (req, res) {
    try {
      let exerciseData = await Excercise.find({}).sort('-createdAt');
      return res.render('excercise-planner', {
        
        title: ' Excercise Planner',
        exerciseData

        
      });
    } catch {
      console.log('Error',err);
      return;
    }
  };

    
module.exports.logExcercise = async function (req, res) {
  try{
    const { exerciseName, duration } = req.body;

    
    if (!exerciseName || !duration || isNaN(duration)) {
        return res.status(400).send('Invalid data submitted');
    }
    Excercise.create({
      exerciseName: req.body.exerciseName,
      duration: req.body.duration,
      
    });
  
    // Redirect back to Exercise Planner 
    res.redirect('/excercise-planner');
  } catch {
    console.log('Error', err);
    return;
  }
  
};


  
module.exports.logWater = async function (req, res) {
    try {
      
      waterLog.create({
        waterIntake: req.body.waterIntake,
        
      });
  
      res.redirect('/excercise-planner');
    } catch {
      console.log('Error', err);
      return;
    }
  };

  module.exports.getWaterLog = async function (req, res) {
    try {
      let waterIntakeData = await waterLog.find({}).sort('-createdAt');
      return res.render('water-intake-log', {
        title: ' Water intake Log',
        waterIntakeData

        
      });
    } catch {
      console.log('Error', err);
      return;
    }
  };




   
module.exports.logMeal = async function (req, res) {
  try {
    mealLog.create({
      mealType: req.body.mealType,
      calories: req.body.calories,
      
    });

    res.redirect('/excercise-planner');
  } catch {
    console.log('Error', err);
    return;
  }
};

module.exports.getMealLog = async function (req, res) {
  try {
    let mealLogData = await mealLog.find({}).sort('-createdAt');
    return res.render('meal-log', { mealLogData });
  } catch {
    console.log('Error', err);
    return;
  }
};



   
module.exports.setGoals = async function (req, res) {
  try {

    goalLog.create({
      goalType: req.body.goalType,
      goalValue: req.body.goalValue,
      
    });

    res.redirect('/excercise-planner');
  } catch {
    console.log('Error', err);
    return;
  }
};

module.exports.goalTracker = async function (req, res) {
  try {
    let goalTrackingData = await goalLog.find({}).sort('-createdAt');
    res.render('goal-tracker', { goalTrackingData });
  } catch {
    console.log('Error', err);
    return;
  }
};

