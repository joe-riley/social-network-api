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

  async getUser(req, res) {
    try {
      const user = await User.findOne({
          _id: req.params.id
        },
      )
      if (!user) {
        res.status(400).json({ 
            message: 'User not found.',
          }
        );
        return;
      }
      res.json(user);
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
  },

  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        { 
          new: true, 
        },
      )
      if (!updatedUser) {
        res.status(404).json({
          message: 'User not found.',
        });
        return;
      }
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const userToRemove = await User.findByIdAndDelete(req.params.id);
      if(!userToRemove) {
        res.status(404).json({
          message: 'User not found.',
        })
        return;
      }
      res.json(userToRemove);
    } catch (err) {
      console.err(err);
      res.status(500).json(err);
    }
  },
}

module.exports = userController;
