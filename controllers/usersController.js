// const User = require("../models/user");

const index = async (req, res) => {
  res.json({ all: "users" })
  // const data = req.body;
  // const user = await User.create(data);
  // res.json(user)
} 

module.exports = {
  index,
}
