const Goal = require("../models/goal");

const index = async (req, res) => {
  res.json({msg: "getAll"})
} 

const create = async (req, res) => {
  res.json({msg: "Create One"})
}


module.exports = {
  index,
  create,
}
