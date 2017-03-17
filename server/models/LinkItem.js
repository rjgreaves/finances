const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkItemSchema = new Schema({
  description: String,
  url: String,
  voteCount: Number,
  voters: Array,
});

const LinkItem = mongoose.model('LinkItem', LinkItemSchema);

module.exports = LinkItemSchema;
module.exports = LinkItem;
