const Excercise=require('../models/excercise');
const mealLog=require('../models/meal');
const waterLog=require('../models/water');

module.exports.home = async function (req, res) {
    try {
      let exerciseData = await Excercise.find({}).sort('-createdAt');
      let mealLogData = await mealLog.find({}).sort('-createdAt');
      let waterLogData = await waterLog.find({}).sort('-createdAt');
      return res.render('dashboard', {
        title: ' Health Dashboard',
        exerciseData,
        mealLogData,
        waterLogData
        
      });
    } catch {
      console.log('Error', err);
      return;
    }
  };