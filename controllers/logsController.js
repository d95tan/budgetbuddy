const Log = require("../models/log");

const index = async (req, res) => {
  // const {userId} = req.get("Authorization").split(" ")[1]
  // const logs = await Log.find({userId})
  const logs = await Log.find({});
  logs.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  })
  res.json(logs)
} 

const create = async (req, res) => {
  const data = req.body;
  const log = await Log.create(data);
  res.json(log)
}

const updateMany = async (req, res) => {
  const data = req.body;
  const response = [];
  for (const item of data) {
    const log = await Log.findByIdAndUpdate(item.id, item, {new: true})
    response.push(log);
  }
  res.json(response)
}

module.exports = {
  index,
  create,
  updateMany
}
