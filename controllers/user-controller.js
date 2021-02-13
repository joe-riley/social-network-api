const { User } = require('../models');

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.err(err);
      res.status(400).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body)
      res.json(newUser);
    } catch (err) {
      console.err(err);
      res.status(500).json(err);
    }
  }
}

module.exports = userController;