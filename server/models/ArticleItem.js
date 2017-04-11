const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const ArticleItemSchema = new Schema({
  description: String,
  url: String,
  voteCount: Number,
  voters: Array,
});

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
ArticleItemSchema.virtual('id').get(() => this._id);

const ArticleItem = mongoose.model('ArticleItem', ArticleItemSchema);

module.exports = ArticleItemSchema;
module.exports = ArticleItem;
