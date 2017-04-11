const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const ArticleItemSchema = require('./ArticleItem').schema;

const Schema = mongoose.Schema;

const NewsletterItemSchema = new Schema({
  name: String,
  description: String,
  articles: [ArticleItemSchema],
});

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
NewsletterItemSchema.virtual('id').get(() => this._id);

const NewsletterItem = mongoose.model('NewsletterItem', NewsletterItemSchema, 'newsletters');

module.exports = NewsletterItem;
