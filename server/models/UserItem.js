const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const UserItemSchema = new mongoose.Schema({
  email: String,
  passwordHash: String,
});

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
UserItemSchema.virtual('id').get(() => this._id);

const UserItem = mongoose.model('User', UserItemSchema, 'users');

module.exports = {
  UserItem,
};
