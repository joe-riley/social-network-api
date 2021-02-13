const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      }
    ]
  },
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;