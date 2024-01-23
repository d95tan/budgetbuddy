const Goal = require("../models/goal");

const index = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 

const create = async (req, res) => {
  try {
    const newGoal = new Goal(req.body);
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findByIdAndDelete(id);
    if (!goal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    res.status(200).json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  index,
  create,
  deleteGoal,
}
