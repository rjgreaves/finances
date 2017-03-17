const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkItemSchema = new Schema({
  description: String,
  url: String,
  voteCount: Number,
  voters: Array,
});

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
LinkItemSchema.virtual('id').get(() => this._id);

const LinkItem = mongoose.model('LinkItem', LinkItemSchema);

module.exports = LinkItemSchema;
module.exports = LinkItem;
