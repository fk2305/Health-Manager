const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');
const plannerController=require('../controller/planner_controller')
const healthController=require("../controller/health_reminder")

console.log('router loaded');

router.get('/',homeController.home);
router.get('/excercise-planner',plannerController.planner);
router.post('/log-water-intake',plannerController.logWater);
router.get('/water-intake-log',plannerController.getWaterLog)
router.post('/log-meal',plannerController.logMeal);
router.get('/meal-log',plannerController.getMealLog);
router.post('/set-goals',plannerController.setGoals);
router.get('/goal-tracker',plannerController.goalTracker);
router.get('/health-reminder',healthController.getReminder);
router.post('/set-reminder',healthController.setReminder);
router.post('/log-excercise',plannerController.logExcercise);
module.exports = router;
