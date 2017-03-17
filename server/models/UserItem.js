const mongoose = require('mongoose');

const UserItemSchema = new mongoose.Schema({
  email: String,
  passwordHash: String,
});

const UserItem = mongoose.model('User', UserItemSchema, 'users');

module.exports = {
  UserItem,
};
