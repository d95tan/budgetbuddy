const User = require("../models/user");

const index = async (req, res) => {
  const users = await User.find({})
  res.json(users)
  // const data = req.body;
  // const user = await User.create(data);
  // res.json(user)
} 

const create = async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
}

module.exports = {
  index,
  create
}
