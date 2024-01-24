const debug = require("debug")("mern:controllers:userprefersController");
const UserPreference = require('../models/userPreference');
// import * as usersController from './usersController';
const usersController = require('./usersController');


const index = async (req, res) => {
  const preference = await UserPreference.find({})
  res.json(preference)

} 

const createIncome = async (req, res) => {
  const { date, income } = req.body; 

  try {
    const income = await UserPreference.create(req.body);


    const token = usersController.createJWT(income);
    res.json(token);
  }
  catch (err) {
    res.status(400).json(err);
  }

}

const update = async (req, res) => {
  // try {
  //   // Add the user to the db
  //   const user = await userPreference.create(req.body);
  //   const token = usersController.createJWT(user);
  //   res.json(token);
  // }
  // catch (err) {
  //   res.status(400).json(err);
  // }
}

const createBirthday = async (req, res) => {
  // const { birthday } = req.body; 

  try {
    const birthday = await UserPreference.birthday(req.body);
    const token = usersController.createJWT(birthday);
    res.json(token);
  }
  catch (err) {
    res.status(400).json(err);
  }

}


module.exports = {
  index,
  createIncome,
  update, 
  createBirthday,
}
