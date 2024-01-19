const Log = require("../models/log");

const index = async (req, res) => {
  // const {userId} = req.get("Authorization").split(" ")[1]
  // const logs = await Log.find({userId})
  const logs = await Log.find({});
  res.json(logs)
} 

const create = async (req, res) => {
  const data = req.body;
  const log = await Log.create(data);
  res.json(log)
}

module.exports = {
  index,
  create
}
