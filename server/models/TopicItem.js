const mongoose = require('mongoose');
const LinkItemSchema = require('./LinkItem').schema;

const Schema = mongoose.Schema;

const TopicItemSchema = new Schema({
  name: String,
  description: String,
  links: [LinkItemSchema],
}, { _id: false });

const TopicItem = mongoose.model('TopicItem', TopicItemSchema, 'topics');

module.exports = TopicItem;
