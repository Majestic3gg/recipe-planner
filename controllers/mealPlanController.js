const MealPlan = require('../models/MealPlan');

exports.createMealPlan = async (req, res) => {
  try {
    const mealPlan = new MealPlan(req.body);
    await mealPlan.save();
    res.status(201).json(mealPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find().populate('meals.recipe');
    res.json(mealPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMealPlanById = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id).populate('meals.recipe');
    if (!mealPlan) return res.status(404).json({ message: 'Meal plan not found' });
    res.json(mealPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mealPlan) return res.status(404).json({ message: 'Meal plan not found' });
    res.json(mealPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndDelete(req.params.id);
    if (!mealPlan) return res.status(404).json({ message: 'Meal plan not found' });
    res.json({ message: 'Meal plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};